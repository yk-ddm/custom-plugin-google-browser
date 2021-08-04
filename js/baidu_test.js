console.log('baidu test start')

document.addEventListener('DOMContentLoaded', function ()
{
    var jsPath = "js/inject.js",
        tmp = document.createElement('script')

    tmp.src = chrome.extension.getURL(jsPath)
    tmp.setAttribute('type', 'text/javascript')
    document.body.appendChild(tmp)
})