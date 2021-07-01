class Select {
  constructor(params) {
    this.id = params.id
    this.data = params.data
    this.select = document.getElementById(this.id)
    this.button = this.select.querySelector('.select__button')
    this.list = this.select.querySelector('.select__list')
  }

  init() {
    // Создает список элементов селекта
    this.data.forEach(item => {
      // Создает разметку элемента
      const option = document.createElement('li')
      option.className = 'select__item'
      option.innerHTML = `<label class="select__label">
                            <input class="select__input" type="radio" name="${this.id}" value="${item.value}" data-name="${item.name}">
                            ${item.name}
                          </label>`

      // Выбирает элемент по умолчанию, если его default равен true
      const radio = option.querySelector('.select__input')

      if(item.default) {
        radio.checked = true
        this.button.textContent = item.name
      }

      // Меняет значение селекта при выборе элемента
      radio.addEventListener('change', () => {
        if (radio.checked) {
          this.button.textContent = radio.getAttribute('data-name')

          // ----> Обработчик значения селекта
        }
      })

      // Добавляет элемент в список селекта
      this.list.append(option)
    })

    // Закрывает селект при клике вне него и на оборот
    window.addEventListener('click', (e) => {
      if (e.target === this.select || this.select.contains(e.target)) {
        this.list.style.display = 'block'

        this.select.style.minWidth = this.list.offsetWidth + 'px'
        this.select.classList.add('select_active')
      } else {
        this.list.style.display = 'none'
        this.select.style.minWidth = 'max-content'
        this.select.classList.remove('select_active')
      }
    })
  }
}