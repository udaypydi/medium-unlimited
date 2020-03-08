chrome.tabs.onUpdated.addListener(function(id, info, tab){

    // decide if we're ready to inject content script
    if (tab.status !== "complete"){
        console.log("not yet");
        return;
    }
    
    chrome.cookies.getAll({domain: "https://medium.com/"}, function(cookies) {
        console.log(cookies);
    });    
});