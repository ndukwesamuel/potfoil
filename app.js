const showSite = () => {
  const overlays = document.querySelectorAll('.card')

  overlays.forEach((overlay) => {
    const siteButton = overlay.querySelector('.site')
    overlay.addEventListener('mouseenter', () => {
      siteButton.style.transform = 'translateY(0)'
    })
    overlay.addEventListener('mouseleave', () => {
      siteButton.style.transform = 'translateY(-100%)'
    })
  })
}

// we implement the plugin for the scroll on reveal
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 2000,
  reset: true,
})

// each html that has the class atribute of cc-scroll will therefore implement the scroll reveal method...
sr.reveal(`.cc-scroll`, {
  interval: 100,
})

// BEG.JS
const beg = () => {
  const begBtn = document.querySelector('.beg')
  begBtn.addEventListener('click', () => {
    let tl = gsap.timeline()
    tl.to('.split-1', { opacity: 0, y: '-20rem' })
    tl.to('.split-2', { opacity: 0, y: '20rem' })
    tl.to('.plead', { opacity: '100%', y: '18rem' })
  })
}

// GSAP ANIMATION
const runAnimation = () => {

  gsap.from('.line', {
    width: 0,
    duration: 1,
  })

  gsap.from('.cc-scroll-skill', {
    scrollTrigger: '.cc-scroll-skill', // start the animation when ".box" enters the viewport (once)
    duration: 0.3,
    opacity: 0,
    scale: '0.1',
    stagger: 0.2,
    ease: 'bounce.out',
  })

  gsap.from('.cc-scroll-socials', {
    duration: 0.3,
    opacity: 0,
    scale: '0.1',
    stagger: 0.2,
    ease: 'bounce.out',
  })

  gsap.from('.cc-scroll-box', {
    scrollTrigger: '.cc-scroll-box', // start the animation when ".box" enters the viewport (once)
    opacity: 0,
    y: 100,
    stagger: 0.8,
  })

  gsap.from('.intro', {
    duration: 1,
    opacity: 0,
    y: 50,
  })
}

showSite()
runAnimation()
beg()
