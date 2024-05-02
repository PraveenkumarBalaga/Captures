  // JavaScript to handle navigation and showing/hiding pages
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar-items');
    const pages = document.querySelectorAll('div[id^="page-"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the #
        showPage(targetId);
      });
    });

    function showPage(pageId) {
      pages.forEach(page => {
        if (page.id === pageId) {
          page.style.display = 'block';
        } else {
          page.style.display = 'none';
        }
      });
    }
  });

  document.querySelector('.rating').addEventListener('change', function(e) {
  var ratingValue = e.target.value;
  console.log("Selected rating:", ratingValue);
  // You can do something with the rating value here, like displaying it or storing it
});



function animateNumber(elementId, end, duration) {
  let start = 0;
  const stepTime = duration / end;
  const numberElement = document.getElementById(elementId);
  
  clearInterval(window['interval_' + elementId]); // Clear any existing interval
  numberElement.textContent = '0'; // Reset the number
  
  window['interval_' + elementId] = setInterval(() => {
      start++;
      numberElement.textContent = start + ' + '; // Update to include '+'
      if (start >= end) {
          clearInterval(window['interval_' + elementId]);
          numberElement.textContent = end + ' + '; // Ensure '+' is included after the final number
      }
  }, stepTime);
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          animateNumber('number1', 7, 5000);
          animateNumber('number2', 323, 5000);
          animateNumber('number3', 5000, 5000);
          animateNumber('number4', 2381, 5000);
      }
  });
}, { threshold: 0.5 });

observer.observe(document.getElementById('page-3'));

// script.js
document.addEventListener('DOMContentLoaded', function() {
  const scrollContent = document.querySelector('.scroll-content');

  scrollContent.addEventListener('mouseover', function() {
      scrollContent.style.animationPlayState = 'paused';
  });

  scrollContent.addEventListener('mouseout', function() {
      scrollContent.style.animationPlayState = 'running';
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Get the element with the class name "portraits-title"
  var portraitsTitle = document.querySelector(".captures");

  // Add a click event listener to the portraitsTitle element
  portraitsTitle.addEventListener("click", function() {
      // Reload the page
      location.reload();

      // Scroll to the "home" section after a brief delay
      setTimeout(function() {
          var homeSection = document.getElementById("home");
          homeSection.scrollIntoView({ behavior: "smooth" });
      }, 1000); // Adjust the delay time as needed
  });
});


































































//chatbot
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/661178e9a0c6737bd129034c/1hqq40kud';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();