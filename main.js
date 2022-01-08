const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', togleMenu)
btnMobile.addEventListener('touchstart', togleMenu)

function togleMenu(event) {
   if(event.type === 'touchstart') { 
        event.preventDefault();
   }
  
   const nav = document.getElementById('nav')
   nav.classList.toggle('active')
}
