var oA = document.getElementById("open-background")

oA.onclick = function () {
    window.open( chrome.extension.getURL("background.html") )
}