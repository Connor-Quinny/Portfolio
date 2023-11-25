document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navElements = document.getElementById('nav-elements');
  
    menuIcon.addEventListener('click', () => {
      // This toggles the 'active' class on and off when clicking the menu icon
      navElements.classList.toggle('active');
    });
  });
  




  document.addEventListener('DOMContentLoaded', function() {
    var texts = ['and I\'m a Web Developer', 'and I\'m a Backend Developer', 'and I\'m a React Developer'];
    var textIndex = 0;
    var typedTextElement = document.getElementById('typed-text');
  
    function updateText() {
      textIndex = (textIndex + 1) % texts.length;
      typedTextElement.textContent = texts[textIndex];
    }
  
    setInterval(updateText, 4000);
    
    // Lottie animation setup
    fetch('Navbar/Animation - 1699371529546.json').then(response => response.json()).then(data => {
      lottie.loadAnimation({
        container: document.getElementById('lottie-container'), // the container that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data // the path to the animation json
      });
    });
  });
  
  function viewPortfolio() {
    // Logic to navigate to the portfolio section or page
    location.href = 'portfolio'; // Replace with the actual URL or path to your portfolio page
  }
  