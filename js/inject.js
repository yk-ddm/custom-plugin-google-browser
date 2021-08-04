/*
 * @Author: yk 
 * @Date: 2021-08-04 17:40:23 
 * @Last Modified by: yk
 * @Last Modified time: 2021-08-04 21:55:39
 */
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