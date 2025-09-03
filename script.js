document.addEventListener('DOMContentLoaded', function () {
   // Hamburger menu logic
   const hamburger = document.getElementById('hamburger');
   const navlist = document.getElementById('nav-list');
   const closeBtn = document.getElementById('close-btn');

   // Typing effect logic
   function typeEffect(element, text, speed = 100) {
      let i = 0;
      function typing() {
         if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
         } else {
            setTimeout(() => {
               element.textContent = '';
               i = 0;
               typing();
            }, 2000); // Pause before repeating
         }
      }
      element.textContent = '';
      typing();
   }

   // Example usage: add an element with id 'typing-text' in your HTML
   const typingText = document.getElementById('typing-text');
   if (typingText) {
      typeEffect(typingText, typingText.getAttribute('data-text') || 'Welcome to my profile!', 80);
   }


   navlist.style.display = 'flex';

   if (hamburger && navlist && closeBtn) {
      hamburger.addEventListener('click', function () {
         hamburger.style.display = 'none';
         navlist.style.display = 'flex';
      },
         hamburger.style.display = 'none',
         navlist.style.display = 'flex'
      );

      closeBtn.addEventListener('click', function () {
         hamburger.style.display = 'flex';
         navlist.style.display = 'none';
      });
   }

   document.getElementById('currentDate').textContent = new Date().getFullYear();
});