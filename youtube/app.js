const btnMenu = document.getElementById('btnmenu');
const sideBar = document.getElementById('sidebar')
const paragraph = document.querySelectorAll('.secp')
const secno = document.getElementById('secno')

btnMenu.addEventListener('click', () => {
    sideBar.classList.toggle('smallbar')
    paragraph.forEach(p => {
        p.classList.toggle('pnone')
    });
    secno.classList.toggle('secnone')

})