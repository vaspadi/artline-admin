window.addEventListener('DOMContentLoaded', function() {
  const price = document.querySelectorAll('input[name="price"]')
  const payId = document.getElementById('pay-id')

  price.forEach(item => {
    item.addEventListener('change', function() {
      if(this.value === "pay") {
        payId.disabled = false
      } else {
        payId.disabled = true
      }
    })
  })


  const bannerCheckbox = document.getElementById('banner-checkbox')
  const bannerButton = document.getElementById('banner-button')

  bannerCheckbox.addEventListener('change', function() {
    if (this.checked) {
      bannerButton.disabled = false
    } else {
      bannerButton.disabled = true
    }
  })
})