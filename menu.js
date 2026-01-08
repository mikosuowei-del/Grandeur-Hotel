// Menu toggle functionality for mobile devices
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const sidebarMenu = document.getElementById('sidebar-menu');
  const pageWrapper = document.querySelector('.page-wrapper');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebarMenu.style.transform = 'translateX(0)';
      pageWrapper.style.transform = 'translateX(280px)';
      menuToggle.setAttribute('aria-expanded', 'true');
    });
  }
  
  if (closeMenu) {
    closeMenu.addEventListener('click', () => {
      sidebarMenu.style.transform = 'translateX(-280px)';
      pageWrapper.style.transform = 'translateX(0)';
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    });
  }
  
  // Close menu when clicking on links
  const menuLinks = document.querySelectorAll('.menu-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebarMenu.style.transform = 'translateX(-280px)';
      pageWrapper.style.transform = 'translateX(0)';
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
});
