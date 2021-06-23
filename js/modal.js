document.addEventListener('DOMContentLoaded', function() {
  const modalOverlay = document.querySelector('.modal-overlay')
  const modal = document.querySelector('.modal')
  const buttons = document.querySelectorAll('.show-modal')
  const close = document.querySelector('#close-modal')

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation()
      modalOverlay.style.display = 'flex'
    }) 
  })

  window.addEventListener('click', function (e) {
    const contain = e.target === modal || modal.contains(e.target)
    
    if (!contain || e.target === close) {
      modalOverlay.style.display = 'none'
    }
  })
})