chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.set({ censor: true }, function () {
    console.log("Postman sensitive variable sensorship enabled");
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(`Tab ${tabId} updated.`, JSON.stringify(changeInfo));
  const validUrl = /^http/;
  if (changeInfo.status === "complete" && validUrl.test(tab.url)) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["./content.js"],
      })
      .catch((err) => console.log(err));
  }
});
