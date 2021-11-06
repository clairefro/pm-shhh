chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.commaned === "init") {
    addListeners();
  } else {
    removeListeners();
  }
  sendResponse({ result: "success" });
});

window.onload = function () {
  chrome.storage.sync.get("censor", function (data) {
    if (data.censor) {
      addListeners();
    } else {
      removeListeners();
    }
  });
};
