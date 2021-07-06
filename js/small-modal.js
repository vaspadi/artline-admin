class SmallModal {
  constructor (params) {
    this.text = params.text
  }

  hide() {
    this.modal.remove()
  }

  createModal() {
    const element = document.createElement('div')
    element.className = 'small-modal-overlay'
    element.innerHTML = `<div class="small-modal">
                             <p class="small-modal__text">${this.text}</p>
                             <div class="small-modal__row">
                               <button class="small-modal__button small-modal__close">Отменить</button><button class="small-modal__button simple-button small-modal__submit">Да</button>
                             </div>
                           </div>`

    let row = element.querySelector('.small-modal__row')

    element.addEventListener('click', (event) => {
      if (event.target === element) this.hide()
    })

    row.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        this.hide()
      }
    })

    function value () {
  return ['test', 'test2']
}

const result = value()
  [0]

console.log(result)
    this.modal = element
  }

  show() {
    this.createModal()

    document.body.append(this.modal)
  }
}