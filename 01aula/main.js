function onScroll() {
  var nav = document.getElementById('navigation')

  if (scrollY === 0) {
    nav.classList.remove('scroll')
  } else {
    nav.classList.add('scroll')
  }
}

function openMenu() {
  var body = document.body

  body.classList.add('menu-expanded')
}

function closeMenu() {
  var body = document.body

  body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900
}).reveal(`
  #home, 
  #home img, 
  #home .kpis,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content
`)
