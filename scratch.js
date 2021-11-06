const rows = [
  ...document.querySelectorAll(
    ".variables-editor__content .key-value-form-editor-sortable .key-value-form-row"
  ),
];

rows.forEach((r) => {
  const curValDiv = r.childNodes[1].childNodes[1].childNodes[2];
  console.log(curValDiv);
  const hasValue = !!curValDiv.innerText;
  if (hasValue) {
    curValDiv.style.background = "black !important";
  }

  console.log(hasValue);
});

let rows = [
  ...document.querySelectorAll(
    ".variables-editor__content .key-value-form-editor-sortable .key-value-form-row"
  ),
];

rows.forEach((r) => {
  const curValDiv = r.childNodes[1].childNodes[1].childNodes[2];
  console.log(curValDiv);

  const hasValue = !!curValDiv.innerText;
  if (hasValue) {
    curValDiv.style.position = "relative";
    console.log(curValDiv);
    let censor = document.createElement("span");
    censor.innerText = "👀 HIDDEN";
    censor.style.backgroundColor = "red";
    censor.style.width = "100%";
    censor.style.height = "100%";
    censor.style.position = "relative";
    // censor.style.right = "-192";
    curValDiv.after(censor);
  }
});

rows.forEach((r) => {
  const curValDiv = r.childNodes[1].childNodes[1].childNodes[2];
  console.log(curValDiv.width);
});

// text

let rows = [
  ...document.querySelectorAll(
    ".variables-editor__content .key-value-form-editor-sortable .key-value-form-row"
  ),
];

const CENSOR_CLASS = "x-shh-censor";

rows.forEach((r) => {
  const curValDiv = r.childNodes[1].childNodes[1].childNodes[2].childNodes[0];
  const curValTextDiv = curValDiv.childNodes[0];
  console.log(curValDiv.classList);

  const hasValue = !!curValTextDiv.innerText;
  const alreadyCensored = !!curValDiv.querySelector(`.${CENSOR_CLASS}`);

  if (hasValue & !alreadyCensored) {
    const textOffset = curValTextDiv.offsetWidth;
    curValTextDiv.style.position = "relative";

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
    censor.innerHtml = `<button onclick="() => this.remove()">x</button>`;

    curValTextDiv.after(censor);
  }
});

// const turnRed = (target) => {
//   console.log(target);
// };

// class ClassWatcher {
//   constructor(
//     targetNode,
//     classToWatch,
//     classAddedCallback,
//     classRemovedCallback
//   ) {
//     this.targetNode = targetNode;
//     this.classToWatch = classToWatch;
//     this.classAddedCallback = classAddedCallback;
//     this.classRemovedCallback = classRemovedCallback;
//     this.observer = null;
//     this.lastClassState = targetNode.classList.contains(this.classToWatch);

//     this.init();
//   }

//   init() {
//     this.observer = new MutationObserver(this.mutationCallback);
//     this.observe();
//   }

//   observe() {
//     this.observer.observe(this.targetNode, { attributes: true });
//   }

//   disconnect() {
//     this.observer.disconnect();
//   }

//   mutationCallback = (mutationsList) => {
//     for (let mutation of mutationsList) {
//       if (
//         mutation.type === "attributes" &&
//         mutation.attributeName === "class"
//       ) {
//         let currentClassState = mutation.target.classList.contains(
//           this.classToWatch
//         );
//         if (this.lastClassState !== currentClassState) {
//           this.lastClassState = currentClassState;
//           if (currentClassState) {
//             this.classAddedCallback();
//           } else {
//             this.classRemovedCallback();
//           }
//         }
//       }
//     }
//   };
// }

// let nodes = [
//     ...document.querySelectorAll(
//       ".variables-editor__content .key-value-form-editor-sortable .key-value-form-row"
//     ),
//   ];

//   nodes.forEach((n) => {
//     let classWatcher = new ClassWatcher(
//       n.childNodes[1].childNodes[1].childNodes[2].childNodes[0],
//       "auto-suggest",
//       turnRed
//     );
//   });

// let curValDivs = document.querySelectorAll(
//   '.variables-editor__content div[class$="-2"]'
// );
// let varRows = document.querySelectorAll(".variables-editor__content");

// function callback(mutationsList) {
//   mutationsList.forEach((mutation) => {
//     console.log(mutation);
//     if (mutation.attributeName === "class") {
//       alert("Ch-ch-ch-changes!");
//     }
//   });
// }

// const mutationObserver = new MutationObserver(callback);

// varRows.forEach((c) => {
//   mutationObserver.observe(c, { attributes: true, childList: true });
// });
