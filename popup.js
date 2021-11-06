// any js for popup goes here
console.log("yo from script.js");

const checkbox = document.getElementById("toggleCensorCheckbox");

checkbox.addEventListener("change", function () {
  if (chrome.runtime?.id) {
    if (this.checked) {
      chrome.storage.local.set({ censor: true });
    } else {
      chrome.storage.local.set({ censor: false });
    }
    chrome.storage.local.get(["censor"], function (store) {
      console.log("censor status: ", store.censor);
    });
  }
});
