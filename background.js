function handleClick(_tab) {
  chrome.tabs.executeScript(
    null,
    { allFrames: true, file: "jquery-3.3.1.min.js" },
    function () {
      chrome.tabs.executeScript(null, {
        allFrames: true,
        file: "onExtensionControlClick.js",
      });
    }
  );
}

chrome.browserAction.onClicked.addListener(handleClick);
