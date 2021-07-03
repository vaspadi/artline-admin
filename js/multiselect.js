class Multiselect {
  constructor(params) {
    this.data = params.data
    this.id = params.id
    this.multiselect = document.getElementById(this.id)
    this.search = this.multiselect.querySelector('.multiselect__search')
    this.list = this.multiselect.querySelector('.multiselect__list')
  }

  createOptions() {
    this.options = this.data.map(item => {
      // Разметка элемента
      let option = document.createElement('li')
      option.className = 'multiselect__item'
      option.innerHTML = `<label class="multiselect__label">
                            <input class="radio__input" type="checkbox" value="${item.value}" name="sticker">
                            <span class="multiselect__pseudo-radio radio__pseudo-radio"></span>

                            <div class="multiselect__img">
                              <img src="${item.img}" alt="">
                            </div>

                            <p class="multiselect__text">${item.name}</p>
                          </label>`

      const checkbox = option.querySelector('input')

      // Событие клика на элемент
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          console.log(this.value)
        } else {
          console.log(false)
        }
      })

      return option
    })
  }

  createFirstOption() {
    // Разметка элемента
    const selectAll = document.createElement('li')
    selectAll.className = 'multiselect__item'
    selectAll.innerHTML = `<label class="multiselect__label">
                              <input class="radio__input" type="checkbox" value="all" name="sticker">
                              <span class="multiselect__pseudo-radio radio__pseudo-radio"></span>

                              <p class="multiselect__text">Всё</p>
                            </label>`

    const checkbox = selectAll.querySelector('input')

    // Событие клика на элемент
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        // Выделяет остальные элементы
        this.options.forEach(option => {
          const checkboxOption = option.querySelector('input')
          checkboxOption.checked = true
        })

      } else {
        // Снимает выделение с отстальных элементов
        this.options.forEach(option => {
          const checkboxOption = option.querySelector('input')
          checkboxOption.checked = false
        })
      }
    })

    this.firstOption = selectAll
  }

  putOptionsInList() {
    // Первый элемент, выделяющий или снимающий выделение с остальных элементов 
    this.list.prepend(this.firstOption)

    // Остальные элементы
    this.options.forEach(option => {
      this.list.append(option)
    })
  }

  addEventClickOutside() {
    // Клик в не селекта и его дочерних элементов
    window.addEventListener('click', (e) => {
      if (e.target === this.multiselect || this.multiselect.contains(e.target)) {
        // Показывает список
        this.list.style.display = 'flex'
        this.multiselect.classList.remove("multiselect_no-active")

      } else {
        // Скрывает список, очищает поиск
        this.list.style.display = 'none'
        this.multiselect.classList.add("multiselect_no-active")
        this.search.value = ''
        this.options.forEach(option => {
          option.style.display = 'block'
        })
      }
    })
  }

  addSearch() {
    this.search.addEventListener('keyup', () => {
      const value = this.search.value

      // Показать все элементы, если поиск пуст
      if (value === '') {
        this.firstOption.style.display = 'block'

        this.options.forEach(option => {
          option.style.display = 'block'
        })

        return
      }

      // Скрыть элементы не подходящие под поиск
      this.firstOption.style.display = 'none'
      
      this.options.forEach(option => {
        const name = option.querySelector('.multiselect__text').textContent.toLowerCase()

        if (name.indexOf(value.toLowerCase()) !== -1) {
          option.style.display = 'block'
          
        } else {
          option.style.display = 'none'
        }
      })
    })
  }

  init() {
    this.createOptions()
    this.createFirstOption()
    this.putOptionsInList()
    this.addEventClickOutside()
    this.addSearch()
  }
}