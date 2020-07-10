chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    
    if (changeInfo.status == 'complete') {
        
        chrome.cookies.getAll({domain: "medium.com"}, function(cookies) {
            for(var i=0; i<cookies.length;i++) {
                
                chrome.cookies.remove({url: "https://medium.com/" + cookies[i].path, name: cookies[i].name});
            }
        });
    }
  })
