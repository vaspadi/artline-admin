// window.addEventListener('DOMContentLoaded', function() {

//   const bannerCheckbox = document.getElementById('banner-checkbox')
//   const bannerButton = document.getElementById('banner-button')

//   bannerCheckbox.addEventListener('change', function() {
//     if (this.checked) {
//       bannerButton.disabled = false
//     } else {
//       bannerButton.disabled = true
//     }
//   })
// })

class RadioInput {
  constructor(params) {
    this.radioButtons = document.querySelectorAll(`input[name="${params.radioName}"]`)
    this.input = document.getElementById(params.inputId)
    this._isDisabled = false
  }

  get isDisabled() {
    return this._isDisabled
  }

  set isDisabled(value) {
    this.input.disabled = value
    this._isDisabled = value
  }

  init() {
    this.radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        this.isDisabled = radio.value === 'disabled'
      })
    })
  }
}