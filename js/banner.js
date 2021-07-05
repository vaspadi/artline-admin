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