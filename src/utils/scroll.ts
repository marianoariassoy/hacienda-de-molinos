const scroll = () => {
  const links = document.querySelectorAll('.scroll')
  links.forEach(link => {
    link.addEventListener('click', smoothScroll)
  })

  function smoothScroll(e: Event) {
    e.preventDefault()
    const targetId = this.getAttribute('target')
    const targetElement = document.querySelector(targetId)
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    })
  }

  const servicios = document.querySelector('#servicios') as HTMLElement
  const contacto = document.querySelector('#contacto') as HTMLElement
  const header = document.querySelector('header') as HTMLElement

  window.addEventListener('scroll', () => {
    if (servicios === null || contacto === null) return

    const serviciosRect = servicios.getBoundingClientRect()
    const contactoRect = contacto.getBoundingClientRect()

    if (serviciosRect.top <= 120 && serviciosRect.bottom >= 120) {
      header.classList.add('text-dark')
    } else if (contactoRect.top <= 120 && contactoRect.bottom >= 120) {
      header.classList.add('text-dark')
    } else {
      header.classList.remove('text-dark')
    }

    const currentScroll = window.scrollY
    if (currentScroll > 50) {
      header?.classList.add('header-sm')
      return
    } else {
      header?.classList.remove('header-sm')
    }
  })
}

export default scroll
