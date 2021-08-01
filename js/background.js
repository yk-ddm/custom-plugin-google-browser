// 获取当前tab 页的标题
function getTabTitle() {
    // 获取浏览器当前标签页
    chrome.tabs.getSelected(null, function (tab) {
        // 拿到当前页的标题
        var currentTabTitle = tab.title
        chrome.tabs.executeScript(null, {
            code: 'javascript: alert("当前页的标题: '+ currentTabTitle +'")'
            // code: 'alert("'+ currentTabTitle +'")'  //该方式也可以执行
        })
    })
}

// 实现百度首页自动输入文本字符串进行搜索
function searchAutoByBaidu() {
    chrome.tabs.executeScript(null, {
        // 获取百度输入框的文本字符串
        code: 'var keywords = document.getElementById("kw"); '+
        'keywords.value = "hello world!"; '+
        'var submitBtn = document.getElementById("su");'
        // 'submitBtn.click()'  // 有没有此段代码，皆可以运行
    })
}

// 实现鼠标右键菜单功能
var isCreateContentMenus
function contentMenus() {
    // 创建鼠标右键菜单
    if ( !isCreateContentMenus ) {
        chrome.contextMenus.create({
            // 标题 title
            title: "右键菜单标题",
            onclick: function () {
                searchAutoByBaidu()
            },
            // 指定在哪些tab页显示创建的菜单
            documentUrlPatterns: [
                "https://www.baidu.com/"
            ]
        })

        isCreateContentMenus = true
    }
}