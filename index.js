let attachFile = document.querySelector('.attach-file')
let openBtn = document.getElementById('open-btn')

openBtn.onclick=function () {
    attachFile.classList.toggle('active')
    openBtn.classList.toggle('active')
}