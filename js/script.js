window.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.toggle')
  const addStickersText = document.querySelector('.add-stickers__text')

  toggle.addEventListener('click', function(event) {
    if (this.children[0] === event.target) {
      this.children[0].classList.add('toggle__button_active')
      this.children[1].classList.remove('toggle__button_active')

      addStickersText.textContent = "Перетащите и вставьте .PNGs 512x512 px файлы или"

    } else {
      this.children[0].classList.remove('toggle__button_active')
      this.children[1].classList.add('toggle__button_active')
      
      addStickersText.textContent = "Перетащите и вставьте .WEBP 512x512 px файлы или"
    }
  })
})