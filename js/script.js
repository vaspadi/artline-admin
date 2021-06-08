window.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.toggle')

  toggle.addEventListener('click', function(event) {
    if (this.children[0] === event.target) {
      this.children[0].classList.add('toggle__button_active')
      this.children[1].classList.remove('toggle__button_active')
    } else {
      this.children[0].classList.remove('toggle__button_active')
      this.children[1].classList.add('toggle__button_active')
    }
  })
})