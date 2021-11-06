chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ censor: true }, function () {
    console.log("Postman sensitive variable sensorship enabled");
  });
});

console.log("yo");

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(`Tab ${tabId} updated.`, JSON.stringify(changeInfo));
  const validUrl = /^http/;
  if (changeInfo.status === "complete" && validUrl.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["./content.js"],
      })
      .then(() => {
        // TODO remove
        console.log("Injected content script");
      })
      .catch((err) => console.log(err));
  }
});

// chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//   chrome.declarativeContent.onPageChanged.addRules([
//     {
//       conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//           pageUrl: { hostEquals: "www.postman.com" },
//         }),
//       ],
//       actions: [new chrome.declarativeContent.ShowPageAction()],
//     },
//   ]);
// });
