chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get(['post-article|posts-viewed-count'], function(items) {
        message('articles', items);
    });
});