/*
 * @Author: yk 
 * @Date: 2021-08-04 17:40:23 
 * @Last Modified by: yk
 * @Last Modified time: 2021-08-04 22:49:47
 */

/**
 * @description modified baidu.com home html
 * 
 * add input tag to baidu.com html
 * 
 */
function demoOne()
{
    var oSu = document.getElementById('su'),
        oKw = document.getElementById('kw'),
        oInput = document.createElement('input')

    oInput.type = 'button'
    oInput.className = 'bg s_btn'
    oInput.id = 'yk'
    oInput.value = 'yk'
    // oInput.setAttribute('value', 'yk')
    oInput.style.marginTop = '15px'
    oInput.onclick = function ()
    {
        oKw.value = 'yk test'
    }
    oSu.parentElement.appendChild(oInput)
}

function demoTwo()
{
    document.getElementById('su').setAttribute('value', 'demoTwo test')
    document.getElementById('kw').setAttribute('value', 'demoTwo')
    console.log(document.getElementById('su').value)
}

demoTwo()