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
            ],
            // 指定在 某种状态下显示菜单
            contexts: [
                // 可编辑的状态显示
                "editable",
                // 选中状态下显示
                "selection"
            ],
            // id 的定义，值必须为字符串
            id: "1"
        })

        chrome.contextMenus.create({
            // 标题 title
            title: "子菜单one",
            onclick: function () {
                searchAutoByBaidu()
            },
            // 指定在哪些tab页显示创建的菜单
            documentUrlPatterns: [
                "https://www.baidu.com/"
            ],
            // 指定在 某种状态下显示菜单
            contexts: [
                // 可编辑的状态显示
                "editable",
                // 选中状态下显示
                "selection"
            ],
            /**
             *  type 默认值是 normal 
             *      radio ---> 单选框
             *      checkbox ---> 复选框
             */
            type: "radio",
            // parentId 的定义，值必须为字符串
            parentId: "1"
        })

        chrome.contextMenus.create({
            // 标题 title
            title: "子菜单two",
            onclick: function () {
                searchAutoByBaidu()
            },
            // 指定在哪些tab页显示创建的菜单
            documentUrlPatterns: [
                "https://www.baidu.com/"
            ],
            // 指定在 某种状态下显示菜单
            contexts: [
                // 可编辑的状态显示
                "editable",
                // 选中状态下显示
                "selection"
            ],
            /**
             *  type 默认值是 normal 
             *      radio ---> 单选框
             *      checkbox ---> 复选框
             */
            type: "radio",
            // parentId 的定义，值必须为字符串
            parentId: "1"
        })

        isCreateContentMenus = true
    }
}

// 显示 应用图标icon
var isShowIcon
function showOrHiddenIcon() {
    if ( !isShowIcon ) {
        /**
         *  设置图标Badge相关信息
         *      setBadgeText ---> 设置图标文本
         *      setBadgeBackgroundColor ---> 设置图标背景颜色
         *      
         */
        chrome.browserAction.setBadgeText( { text: 'yk' } )
        chrome.browserAction.setBadgeBackgroundColor( { color: [0, 0, 255, 255] } )
        isShowIcon = true
    } else {
        chrome.browserAction.setBadgeText( { text: '' } )
        chrome.browserAction.setBadgeBackgroundColor( { color: [0, 0, 0, 0] } )
        isShowIcon = false
    }
}