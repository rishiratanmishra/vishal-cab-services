document.addEventListener("DOMContentLoaded", function () {
  // Get references to the toggle button and the menu
  const toggleButton = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");

  // Add click event listener to the toggle button
  toggleButton.addEventListener("click", function () {
      // Toggle the display of the menu and change the toggle button icon
      if (menu.style.display === "flex") {
          menu.style.display = "none";
          toggleButton.innerHTML = "&#9776;"; // Hamburger icon
      } else {
          menu.style.display = "flex";
          toggleButton.innerHTML = "&times;"; // Close icon
      }
  });
});








//  <!-- Image Carousel Section -->
//   <!-- <section class="carousel-section">
//   <div class="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item">
//       <img src="/image/slider-1.jpg" alt="Slide 1">
//     </div>
//     <div class="carousel-item">
//       <img src="/image/slider-2.png" alt="Slide 2">
//     </div>
//     <div class="carousel-item">
//       <img src="/image/slider-3.png" alt="Slide 3">
//     </div>
//   </div>
//   <button class="prev">&#10094;</button>
//   <button class="next">&#10095;</button>
// </div>
// </section> -->
// // Carousel functionality
// let currentIndex = 0;
// const items = document.querySelectorAll('.carousel-item');
// const totalItems = items.length;
// const interval = 4000; // Interval for auto-scrolling in milliseconds
// let autoScrollInterval;

// // Start auto-scrolling
// function startAutoScroll() {
//   autoScrollInterval = setInterval(nextSlide, interval);
// }

// // Stop auto-scrolling
// function stopAutoScroll() {
//   clearInterval(autoScrollInterval);
// }

// // Move to the next slide
// function nextSlide() {
//   if (currentIndex < totalItems - 1) {
//       currentIndex++;
//   } else {
//       currentIndex = 0;
//   }
//   updateCarousel();
// }

// // Update the carousel by adjusting the transform property
// function updateCarousel() {
//   const newTransformValue = `translateX(-${currentIndex * 100}%)`;
//   document.querySelector('.carousel-inner').style.transform = newTransformValue;
// }

// // Event listener for the next button
// document.querySelector('.next').addEventListener('click', () => {
//   stopAutoScroll();
//   nextSlide();
//   startAutoScroll();
// });

// // Event listener for the previous button
// document.querySelector('.prev').addEventListener('click', () => {
//   stopAutoScroll();
//   if (currentIndex > 0) {
//       currentIndex--;
//   } else {
//       currentIndex = totalItems - 1;
//   }
//   updateCarousel();
//   startAutoScroll();
// });

// // Auto-scrolling
// startAutoScroll();

// // Stop auto-scrolling on hover
// document.querySelector('.carousel').addEventListener('mouseenter', stopAutoScroll);
// document.querySelector('.carousel').addEventListener('mouseleave', startAutoScroll);


function bookCab() {
  var firstName = document.getElementById("firstName").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  if (firstName.trim() === "" || from.trim() === "" || to.trim() === "") {
    alert("Please fill out all fields in the form.");
  } else {
    var message = "Hi Vishal Cab Services, my name is " + firstName + ", I want a cab for " + from + " to " + to;

    // Replace with the recipient's phone number, including the country code (e.g., +1 for the United States)
    var phoneNumber = "+918840864525";

    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(url, "_blank");
  }
}