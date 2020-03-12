// called when the status of the chrome tab is updated.

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    
    // check if the tab is still loading or the loading is complete.
    
    if (changeInfo.status == 'complete') {
        
        // read every cookie in medium.com
        
        chrome.cookies.getAll({domain: "medium.com"}, function(cookies) {
            for(var i=0; i<cookies.length;i++) {
                chrome.cookies.remove({url: "https://medium.com/" + cookies[i].path, name: cookies[i].name});
            }
        });
    }
  })
