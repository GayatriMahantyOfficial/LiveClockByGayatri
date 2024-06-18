let hamburgerIcon = document.querySelector('.hamburger-menu')
let headerContent = document.querySelector('.header-content')
let closeIcon = doucment.querySelector('.close-icon')


hamburgerIcon. addEventListener('click',() => {
    headerContent.clastList.add('menu-open')
})
closeIcon. addEventListener('click',() => {
    headerContent.clastList.remove('menu-open')
})
