const openBtn = document.getElementById('btn')
const closeBtn = document.getElementById('close-btn')
const modal = document.getElementById('container')

openBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
   if(e.target === modal){
    modal.style.display = 'none'
   }
})