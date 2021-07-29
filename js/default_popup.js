var oA = document.getElementById("open-background")

oA.onclick = function () {
    // 打开后台页
    //window.open( chrome.extension.getURL("background.html") )

    // 调用后台js
    var background = chrome.extension.getBackgroundPage()
    background.getTabTitle()
}