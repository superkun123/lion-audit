let menuBtn = document.querySelector('.nav-main__hamburger')
let modalBtn = document.querySelector('.contacts__modal')
let closeBtn = document.querySelector('.modal__cross')
let modal = document.querySelector('.modal')

menuBtn.addEventListener('click', function() {
    let menu = document.querySelector('.nav__list')
    menu.classList.toggle('show')
    menu.classList.toggle('hide')
    menuBtn.classList.toggle('close')
})

modalBtn.addEventListener('click', function() {
    event.preventDefault()
    modal.classList.toggle('show')
})

closeBtn.addEventListener('click', function() {
    event.preventDefault()
    modal.classList.toggle('show')
})
