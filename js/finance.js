window.addEventListener('DOMContentLoaded', function() {
  const all = document.querySelector('input[name="all"]')
  const stickers = document.querySelectorAll('input[name="sticker"]')

  all.addEventListener('change', function() {
    if (this.checked) {
      stickers.forEach(item => {
        item.checked = true
      })
    } else {
      stickers.forEach(item => {
        item.checked = false
      })
    }
  })
})