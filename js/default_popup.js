var oA = document.getElementById("open-background")

oA.onclick = function () {
    // 打开后台页 background.html
    //window.open( chrome.extension.getURL("background.html") )

    // 调用后台js
    var background = chrome.extension.getBackgroundPage()
    // 显示当前tab 页的标题
    //background.getTabTitle()

    background.searchAutoByBaidu()
}