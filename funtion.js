function scrollToSection() {
    document.getElementById('top-category').scrollIntoView({ behavior: 'smooth' });
  }
  document.getElementById('shopnow-button').addEventListener('click', scrollToSection);

  document.addEventListener('DOMContentLoaded', function() {
    var aboutSection = document.querySelector('.about-us');
    var lastScrollTop = 0;
    
    // Function to check scroll direction
    function isScrollingDown() {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      var scrollingDown = st > lastScrollTop;
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      return scrollingDown;
    }
    
    // Initial showing of about section
    if (aboutSection) {
      aboutSection.classList.add('show');
    }
    
    // Function to handle scroll event
    function handleScroll() {
      if (aboutSection) {
        if (isScrollingDown()) {
          aboutSection.classList.add('show');
        } else {
          aboutSection.classList.remove('show');
        }
      }
    }
    
    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const aboutUsLink = document.querySelector('a[href="#about-us"]');
    aboutUsLink.addEventListener('click', function(event) {
        event.preventDefault();
        const aboutUsSection = document.getElementById('about-us');
        aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const typingTextElement = document.querySelector('.typing-text');
  const aboutUsText = "Thank you for choosing TechTreasure as your go-to destination for all your gadget needs. Join us on this exciting journey as we discover the endless possibilities of technology together!";
  let index = 0;

  function typeText() {
      if (index < aboutUsText.length) {
          typingTextElement.textContent += aboutUsText.charAt(index);
          index++;
          setTimeout(typeText, 50); // Adjust typing speed here (milliseconds)
      }
  }

  // Trigger typing animation when the page loads
  typeText();
});

document.addEventListener('DOMContentLoaded', function () {
  var aboutUsSection = document.querySelector('.about-us');
  window.addEventListener('scroll', function () {
    var sectionTop = aboutUsSection.getBoundingClientRect().top;
    var viewportHeight = window.innerHeight;
    if (sectionTop < viewportHeight - 100) {
      aboutUsSection.classList.add('show');
    }
  });
});