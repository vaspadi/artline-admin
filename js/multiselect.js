document.addEventListener('DOMContentLoaded', function() {
  // Создание элементов селекта
  const items = [
    {value: 'one', name: 'QUPPY 1', img: 'img/stickers/img.jpg'},
    {value: 'two', name: 'QUPPY 2', img: 'img/stickers/img.jpg'},
    {value: 'tree', name: 'QUPPY 3', img: 'img/stickers/img.jpg'}
  ]

  const options = items.map(item => {
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

    // Событие клика на option
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        console.log(this.value)
      } else {
        console.log(false)
      }
    })

    return option
  })

  // Создание первого элемента, выделить все
  let selectAll = document.createElement('li')
  selectAll.className = 'multiselect__item'
  selectAll.innerHTML = `<label class="multiselect__label">
                            <input class="radio__input" type="checkbox" value="all" name="sticker">
                            <span class="multiselect__pseudo-radio radio__pseudo-radio"></span>

                            <p class="multiselect__text">Всё</p>
                          </label>`

  const checkboxSelectAll = selectAll.querySelector('input')

  checkboxSelectAll.addEventListener('change', function() {
    if (this.checked) {
      options.forEach(option => {
        const checkboxOption = option.querySelector('input')
        checkboxOption.checked = true

        console.log(checkboxOption.value)
      })
    } else {
      options.forEach(option => {
        const checkboxOption = option.querySelector('input')
        checkboxOption.checked = false

        console.log(false)
      })
    }
  })

  // Создание селекта
  const multiselect = document.querySelector('.multiselect')
  const multiselectList = document.querySelector('.multiselect__list')
  const multiselectSearch = document.querySelector('.multiselect__search')
  let currentOptions = options

  multiselectList.prepend(selectAll)

  currentOptions.forEach(option => {
    multiselectList.append(option)
  })

  window.addEventListener('click', function(e) {
    if (e.target === multiselect || multiselect.contains(e.target)) {
      multiselectList.style.display = 'flex'
      multiselect.classList.remove("multiselect_no-active")
    } else {
      multiselectList.style.display = 'none'
      multiselect.classList.add("multiselect_no-active")
      multiselectSearch.value = ''

      options.forEach(option => {
        option.style.display = 'block'
      })
    }
  })

  // Поиск паков
  multiselectSearch.addEventListener('keyup', function() {
    const value = this.value

    if (value === '') {
      selectAll.style.display = 'block'

      options.forEach(option => {
        option.style.display = 'block'
      })

      return
    }

    selectAll.style.display = 'none'
    
    options.forEach(option => {
      const name = option.querySelector('.multiselect__text').textContent.toLowerCase()

      if (name.indexOf(value.toLowerCase()) !== -1) {
        option.style.display = 'block'
        
      } else {
        option.style.display = 'none'
      }
    })
  })
})