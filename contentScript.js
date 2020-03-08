chrome.cookies.getAll({domain: "medium.com"}, function(cookies) {
    console.log(cookies);
});