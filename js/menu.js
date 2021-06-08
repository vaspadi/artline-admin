const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const overlay = document.querySelector('.overlay')

burger.addEventListener('click', function() {
  navbar.style.display = 'flex'
  overlay.style.display = 'block'
})

overlay.addEventListener('click', function() {
  navbar.style.display = ''
  this.style.display = ''
})
