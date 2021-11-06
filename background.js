chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ censor: true }, function () {
    console.log("Postman sensitive variable sensorship enabled");
  });
});

console.log("yo");

chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: "www.postman.com" },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()],
    },
  ]);
});
