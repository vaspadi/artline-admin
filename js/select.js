const createSelect = function(id, options) {
  const select = document.getElementById(id)
  const button = select.querySelector('.select__button')
  const selectList = select.querySelector('.select__list')

  options.forEach(item => {
    let option = document.createElement('li')
    option.className = 'select__item'
    option.innerHTML = `<label class="select__label">
                          <input class="select__input" type="radio" name="${id}" value="${item.value}" data-name="${item.name}">
                          ${item.name}
                        </label>`

    const radio = option.querySelector('.select__input')

    if(item.default) {
      radio.checked = true
      button.textContent = item.name
    }

    radio.addEventListener('change', function() {
      if (this.checked) {
        button.textContent = this.getAttribute('data-name')
      }
    })

    selectList.append(option)
  })

  window.addEventListener('click', function(e) {
    if (e.target === select || select.contains(e.target)) {
      selectList.style.display = 'block'
      // console.log(selectList.offsetWidth)

      select.style.minWidth = selectList.offsetWidth + 'px'
      select.classList.add('select_active')
    } else {
      selectList.style.display = 'none'
      select.style.minWidth = 'max-content'
      select.classList.remove('select_active')
    }
  })

}