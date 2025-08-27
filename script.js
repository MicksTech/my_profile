document.addEventListener('DOMContentLoaded', function () {
   // Hamburger menu logic
   const hamburger = document.getElementById('hamburger');
   const navlist = document.getElementById('nav-list');
   const closeBtn = document.getElementById('close-btn');

   if (hamburger && navlist) {
      hamburger.addEventListener('click', function () {
         hamburger.style.display = 'none';
         navlist.style.display = 'flex';
      });
      if (closeBtn) {
         closeBtn.addEventListener('click', function () {
            navlist.style.display = 'none';
            hamburger.style.display = 'flex';
         });
      } else {
         navlist.addEventListener('click', function () {
            navlist.style.display = 'none';
            hamburger.style.display = 'flex';
         });
      }
   }
});