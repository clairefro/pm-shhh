const CENSOR_CLASS = "x-shh-censor";

chrome.storage.onChanged.addListener(async function (changes) {
  const censorStatus = changes["censor"];
  if (censorStatus.newValue === true) {
    censor();
  } else {
    clearCensors();
  }
});

function clearCensors() {
  let censors = [...document.querySelectorAll(`.${CENSOR_CLASS}`)];
  censors.forEach((c) => c.remove());
}

async function censorIfEnabled() {
  if (chrome.runtime?.id) {
    const censorEnabled = await readLocalStorage("censor");
    if (!censorEnabled) return;
    censor();
  }
}

function censor() {
  let curValDivs = [
    // for collection/environment variable main editors
    ...document.querySelectorAll('.variables-editor__content div[class$="-2"]'),
    // for eye-icon preview table
    ...document.querySelectorAll(
      ".environment-preview-list-item .environment-preview-list-item__session-value"
    ),
  ];

  curValDivs.forEach((curValDiv) => {
    const curValTextDiv = curValDiv.childNodes[0];
    const hasValue = !!curValTextDiv.innerText;
    const alreadyCensored = !!curValDiv.querySelector(`.${CENSOR_CLASS}`);
    curValTextDiv.style.position = "relative";

    if (hasValue && !alreadyCensored) {
      let censor = buildCensor();
      curValTextDiv.after(censor);
    } else if (!hasValue && alreadyCensored) {
      curValDiv.querySelector(`.${CENSOR_CLASS}`).remove();
    }
  });
}

function buildCensor() {
  let censor = document.createElement("span");
  censor.classList.add(CENSOR_CLASS);
  censor.innerText = "👀 HIDDEN";
  censor.style.backgroundColor = "orange";
  censor.style.width = "100%";
  censor.style.height = "100%";
  censor.style.position = "absolute";
  censor.style.paddingLeft = "0.5rem";
  censor.style.display = "flex";
  censor.style.justifyContent = "flex-start";
  censor.style.alignItems = "center";
  return censor;
}

// censor on every mouseclick/keyup
document.addEventListener("load", () => setTimeout(censorIfEnabled, 0));
document.addEventListener("mouseup", () => setTimeout(censorIfEnabled, 0));
document.addEventListener("keyup", () => setTimeout(censorIfEnabled, 0));

// -- Utilities ---------------------------------------------
async function readLocalStorage(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], function (result) {
      if (result[key] === undefined) {
        reject();
      } else {
        resolve(result[key]);
      }
    });
  });
}
