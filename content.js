const CENSOR_CLASS = "x-shh-censor";

chrome.storage.onChanged.addListener(async function (changes) {
  var censorStatus = changes["censor"];
  if (censorStatus.newValue === true) {
    // run the censors
    censor();
  } else {
    // clear the censors
    clearCensors();
  }
});

function clearCensors() {
  let censors = [...document.querySelectorAll(`.${CENSOR_CLASS}`)];
  censors.forEach((c) => c.remove());
}

async function censorIfEnabled() {
  const censorEnabled = await readLocalStorage("censor");
  if (!censorEnabled) return;
  censor();
}

function censor() {
  let curValDivs = [
    ...document.querySelectorAll('.variables-editor__content div[class$="-2"]'),
  ];

  curValDivs.forEach((curValDiv) => {
    const curValTextDiv = curValDiv.childNodes[0];

    const hasValue = !!curValTextDiv.innerText;
    const alreadyCensored = !!curValDiv.querySelector(`.${CENSOR_CLASS}`);
    curValTextDiv.style.position = "relative";

    if (hasValue & !alreadyCensored) {
      const textOffset = curValTextDiv.offsetWidth;

      let censor = document.createElement("span");
      censor.classList.add(CENSOR_CLASS);
      censor.innerText = "👀 HIDDEN";
      censor.style.backgroundColor = "orange";
      censor.style.width = "100%";
      censor.style.height = "100%";
      censor.style.position = "relative";
      censor.style.paddingLeft = "0.5rem";
      censor.style.display = "flex";
      censor.style.justifyContent = "flex-start";
      censor.style.alignItems = "center";
      censor.style.transform = `translateX(-${textOffset}px)`;

      curValTextDiv.after(censor);
    } else if (!hasValue && alreadyCensored) {
      curValDiv.querySelector(`.${CENSOR_CLASS}`).remove();
    }
  });
}

// censor on every mouseclick/keyup
document.addEventListener("load", censorIfEnabled);
document.addEventListener("mouseup", censorIfEnabled);
document.addEventListener("keyup", censorIfEnabled);

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
