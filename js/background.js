function getTabTitle() {
    // 获取浏览器当前标签页
    chrome.tabs.getSelected(null, function (tab) {
        // 拿到当前页的标题
        var currentTabTitle = tab.title
        chrome.tabs.executeScript(null, {
            code: 'javascript: alert("'+ currentTabTitle +'")'
            // code: 'alert("'+ currentTabTitle +'")'
        })
    })
    console.dir( chrome.tabs.executeScript() )
}