// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  
  menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('show');
  });
  
  // Hide mobile menu on item click
  document.querySelectorAll('#navigation a').forEach(item => {
    item.addEventListener('click', () => {
      navigation.classList.remove('show');
    });
  });
  