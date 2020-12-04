document.addEventListener('DOMContentLoaded', function () {
  var navbarToggles = Array.prototype.slice.call(document.querySelectorAll('.navbar-lang'), 0)
  if (navbarToggles.length === 0) return
  navbarToggles.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation()
      var arr = document.location.href.split('/')
      document.location.href = arr.slice(0, 3).join('/') + '/' + el.dataset.target + '/' + arr.slice(4).join('/')
    })
  })
})
