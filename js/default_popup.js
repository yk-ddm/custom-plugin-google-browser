var oA = document.getElementById("open-background")

// 调用后台js
var background = chrome.extension.getBackgroundPage()
oA.onclick = function ()
{
    // 打开后台页 background.html
    //window.open( chrome.extension.getURL("background.html") )

    // 调用后台js
    // var background = chrome.extension.getBackgroundPage()

    // 显示当前tab 页的标题
    // background.getTabTitle()

    // 实现百度自动搜索
    // background.searchAutoByBaidu()

    // 实现鼠标右键菜单
    // background.contentMenus()

    // 显示 应用图标icon
    // background.showOrHiddenIcon()

    // 监听地址栏 文本变化进行模拟百度搜索功能
    // background.searchByKeyword()

    // 发布桌面通知
    // background.sendDeskTopNotification()

    // 修改当前标签页的页面样式
    // background.updateCurrentTabStyle( "document.body.style.backgroundColor = 'skyblue';" +
    // "document.body.style.fontSize = '36px';" )

    // 在特定的 Tab 页显示
    // background.showTab()


}