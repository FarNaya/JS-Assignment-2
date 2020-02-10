
toggmenu = document.querySelector('.toggmenu')
nav = document.querySelector('header ul')

   toggmenu.addEventListener('click', () => {
       nav.classList.toggle('on')
       toggmenu.classList.toggle('off')
    })
