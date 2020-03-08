chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.get(['post-article|posts-viewed-count'], function(items) {
        if (items > 3) {
            chrome.storage.local.set({'post-article|posts-viewed-count': 0}, function() {
                console.log('Value is set to ' + 0);
            });
        }
    });
});