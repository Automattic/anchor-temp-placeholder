function handleClick(tab) {
  chrome.tabs.executeScript(null, { file: "jquery-3.3.1.min.js" }, function () {
    chrome.tabs.executeScript(null, { file: "onExtensionControlClick.js" });
  });
}

chrome.browserAction.onClicked.addListener(handleClick);
