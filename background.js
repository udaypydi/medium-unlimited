chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    
    // call the hook once the tab is completely loaded.
    
    if (changeInfo.status === 'complete') {
        chrome.cookies.getAll({domain: "medium.com"}, (cookies) => {
            for(let i = 0; i < cookies.length; i++) {
                chrome.cookies.remove({url: "https://medium.com/" + cookies[i].path, name: cookies[i].name});
            }
        });
    }
  })
