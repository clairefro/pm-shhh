function censor() {
  let foos = [
    ...document.querySelectorAll(
      ".variables-editor__content .key-value-form-editor-sortable .key-value-form-row"
    ),
  ];

  const CENSOR_CLASS = "x-shh-censor";

  foos.forEach((r) => {
    const curValDiv = r.childNodes[1].childNodes[1].childNodes[2].childNodes[0];
    const curValTextDiv = curValDiv.childNodes[0];
    console.log(curValDiv.classList);

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
document.addEventListener("load", censor);
document.addEventListener("mouseup", censor);
document.addEventListener("keyup", censor);
