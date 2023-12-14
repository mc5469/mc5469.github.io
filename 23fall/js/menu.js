const toggleMenu = document.querySelector('.toggleMenu'),
  navigation = document.querySelector('.navigation')

toggleMenu.onclick = function () {
  navigation.classList.toggle('active')
}