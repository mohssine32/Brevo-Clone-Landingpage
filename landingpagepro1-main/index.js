 
 // Sélection des éléments nécessaires
 const burgerMenuButton = document.querySelector('.burger-menu-button');
 const sideNav = document.querySelector('.side-nav');
 const closeButton = document.querySelector('.side-nav button');

 // Fonction pour ouvrir la barre latérale
 burgerMenuButton.addEventListener('click', () => {
     sideNav.style.right = '0'; // Affiche la barre latérale en modifiant sa position
 });

 // Fonction pour fermer la barre latérale
 closeButton.addEventListener('click', () => {
     sideNav.style.right = '-250px'; // Cache la barre latérale en modifiant sa position
 });



 /*** testemoin script ***/
 let currentTestimonial = 1;
 const totalTestimonials = 3;
 function showTestimonial(n) {
     // Hide all testimonials
     for (let i = 1; i <= totalTestimonials; i++) {
         document.getElementById(`testimonial${i}`).style.display = "none";
         document.getElementById(`dot${i}`).classList.remove('active');
     }

     // Show the selected testimonial
     document.getElementById(`testimonial${n}`).style.display = "block";
     document.getElementById(`dot${n}`).classList.add('active');
 }
 function nextTestimonial() {
     currentTestimonial++;
     if (currentTestimonial > totalTestimonials) {
         currentTestimonial = 1;
     }
     showTestimonial(currentTestimonial);
 }
 function prevTestimonial() {
     currentTestimonial--;
     if (currentTestimonial < 1) {
         currentTestimonial = totalTestimonials;
     }
     showTestimonial(currentTestimonial);
 }

 function goToTestimonial(n) {
     currentTestimonial = n;
     showTestimonial(currentTestimonial);
 }

 // Initialize the first testimonial to be visible
 showTestimonial(currentTestimonial);
 