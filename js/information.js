class Banner {
  constructor(params) {
    this.checkbox = document.getElementById(params.checkbox)
    this.banner = document.getElementById(params.banner)
  }

  init() {
    this.checkbox.addEventListener('change', () => {
      this.banner.disabled = !this.checkbox.checked
    })
  }
}


  const bannerCheckbox = document.getElementById('banner-checkbox')
  const bannerButton = document.getElementById('banner-button')



class RadioInput {
  constructor(params) {
    this.active = params.active
    this.radio = document.getElementById(params.id)
    this.labels = this.radio.querySelectorAll('.radio')
    this.radioButtons = this.radio.querySelectorAll(`input[type="radio"]`)
    this.activeRadio = this.radio.querySelector(`input[value="not-disabled"]`)
    this.input = this.radio.querySelector('input[type="text"]')
    this._inputDisabled = false
  }

  get inputDisabled() {
    return this._inputDisabled
  }

  set inputDisabled(value) {
    this.input.disabled = value
    this._inputDisabled = value
  }

  setDisabled() {
    this.labels.forEach(label => {
      label.classList.add('radio_disabled')
    })
    this.radioButtons.forEach(radio => {
      radio.disabled = true
    })
    this.inputDisabled = true
  }

  setActive() {
    this.labels.forEach(label => {
      label.classList.remove('radio_disabled')
    })
    this.radioButtons.forEach(radio => {
      radio.disabled = false

      if (radio.checked && radio.value === 'not-disabled') this.inputDisabled = false
    })
  }
  
  init() {
    if (this.active !== undefined && !this.active) this.setDisabled()

    this.radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        this.inputDisabled = radio.value === 'disabled'
      })
    })
  }
}