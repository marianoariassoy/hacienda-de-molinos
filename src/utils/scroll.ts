const scroll = () => {
  //go to section
  const menuLinks = document.querySelectorAll('.scroll')

  menuLinks.forEach(link => {
    link.addEventListener('click', smoothScroll)
  })

  function smoothScroll(e: Event) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    })
  }

  //active section
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section')
    const navLinks = document.querySelectorAll('.nav-main .scroll')

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 50 && rect.bottom >= 50) {
        navLinks.forEach(link => link.classList.remove('nav-active'))
        navLinks[index].classList.add('nav-active')
      }
    })
  })

  //header small
  const header = document.querySelector('header section')
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY
    if (currentScroll > 10) {
      header?.classList.add('header-small')
      return
    } else {
      header?.classList.remove('header-small')
    }
  })
}

export default scroll
