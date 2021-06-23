document.addEventListener('DOMContentLoaded', function() {
  const modalOverlay = document.querySelector('.modal-overlay')
  const modal = document.querySelector('.modal')
  const button = document.querySelector('#show-modal')

  button.addEventListener('click', function(e) {
    e.stopPropagation()
    modalOverlay.style.display = 'flex'
  }) 

  window.addEventListener('click', function (e) {
    const contain = e.target === modal || modal.contains(e.target)
    
    if (!contain) {
      modalOverlay.style.display = 'none'
    }
  })
})