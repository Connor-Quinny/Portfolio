document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navElements = document.getElementById('nav-elements');
  
    menuIcon.addEventListener('click', () => {
      // This toggles the 'active' class on and off when clicking the menu icon
      navElements.classList.toggle('active');
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
      const carouselList = document.querySelector(".carousel ul");
      const carousel = document.querySelector(".carousel")
      const carouselItems = carousel.querySelectorAll('li')
      const upButton = document.querySelector(".up-button");
      const downButton = document.querySelector(".down-button");
  
    
      // Function to move carousel items up
      upButton.addEventListener("click", function () {
        const lastItem = carouselList.lastElementChild;
        carouselList.removeChild(lastItem);
        carouselList.insertBefore(lastItem, carouselList.firstElementChild);
      });
    
      // Function to move carousel items down
      downButton.addEventListener("click", function () {
        const firstItem = carouselList.firstElementChild;
        carouselList.removeChild(firstItem);
        carouselList.appendChild(firstItem);
      });  
    });
  
  
    
    document.addEventListener("DOMContentLoaded", function () {
      const productItems = document.querySelectorAll(".product-box");
      const contentText = document.getElementById("content-text");
      const contentTitle = document.getElementById("content-title");
      const contentImg = document.getElementById("content-img");
      const contentImg2 = document.getElementById("content-img2")
      const githubLink = document.getElementById("github-link");
      const githubImg = document.getElementById("github");
      const demoLink = document.getElementById("demo-link");
      const demoImg = document.getElementById("demo");
      const techStack = document.getElementById("tech-stack");
  
      productItems.forEach((item) => {
        item.addEventListener("click", function () {
          const productTitle = item.querySelector(".product-title").textContent;
          if (productText.hasOwnProperty(productTitle)) {
            contentTitle.textContent = productTitle;
            contentText.textContent = productText[productTitle];
            // contentImg.src = productImg[productTitle];
          //   contentImg2.src = productImg2[productTitle];
            // githubImg.src = "data:image/svg+xml;charset=UTF-8,%3C?xml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20width%3D%2297%22%20height%3D%2297%22%3E%3Cpath%20fill%3D%22%23F05133%22%20d%3D%22M92.71%2044.408%2052.591%204.291c-2.31-2.311-6.057-2.311-8.369%200l-8.33%208.332L46.459%2023.19c2.456-.83%205.272-.273%207.229%201.685%201.969%201.97%202.521%204.81%201.67%207.275l10.186%2010.185c2.465-.85%205.307-.3%207.275%201.671%202.75%202.75%202.75%207.206%200%209.958-2.752%202.751-7.208%202.751-9.961%200-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997c.67.332%201.303.774%201.861%201.332%202.75%202.75%202.75%207.206%200%209.959-2.75%202.749-7.209%202.749-9.957%200-2.75-2.754-2.75-7.21%200-9.959.68-.679%201.467-1.193%202.307-1.537v-25.23c-.84-.344-1.625-.853-2.307-1.537-2.083-2.082-2.584-5.14-1.516-7.698L31.798%2016.715%204.288%2044.222c-2.311%202.313-2.311%206.06%200%208.371l40.121%2040.118c2.31%202.311%206.056%202.311%208.369%200L92.71%2052.779c2.311-2.311%202.311-6.06%200-8.371z%22%2F%3E%3C%2Fsvg%3E";
            githubLink.appendChild(lottiePlayer);
            githubLink.target = "_blank";
            githubLink.href = githubLinks[productTitle];
            demoLink.target = "_blank";
            demoLink.href = demoLinks[productTitle];
            demoLink.appendChild(lottiePlayerNew);
            // demoImg.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M14%204h-13v18h20v-11h1v12h-22v-20h14v1zm10%205h-1v-6.293l-11.646%2011.647-.708-.708%2011.647-11.646h-6.293v-1h8v8z%22%2F%3E%3C%2Fsvg%3E";
            
            const techStackArray = techStackImages[productTitle];
            const techStackLength = techStackArray.length;
  
            while (techStack.firstChild) {
              techStack.removeChild(techStack.firstChild);
          }
  
            for (let i = 0; i < techStackLength; i++) {
              const newDiv = document.createElement('div');
  
              const newImg = document.createElement('img');
  
              newImg.src = techStackArray[i];
              newImg.classList.add('tech-stack-images');
              newImg.style.width = '75px';  // Example: Set the width to 100 pixels
              newImg.style.height = '75px';   // Example: Let the height adjust proportionally
  
              const caption = document.createElement('p');
              caption.textContent = techStackCaptions[productTitle][i];
  
              newDiv.appendChild(newImg);
              newDiv.appendChild(caption);
              techStack.appendChild(newDiv);
            }
          }
        });
      });
    });
    
  
    
      
      
      const productText = {
        "Dancify" : "Dancify is a mobile app that connects dance enthusiasts together. The app allows users to sign up using custom profile creation in which users can select their favourite dance styles, your preferred role (lead or follow) and a range to search for dance partners. Users can message each other to organise dance practice too. This was a group project as part of the NorthCoders Bootcamp." , 
        "NC Games" : "NC Games is an interactive board game review platform (similar to reddit). It enables users to engage with one another by upvoting and commenting on individual reviews. The front-end interface is integrated with a back-end API, both of which are developed with a Test-Driven Development (TDD) approach to ensure stability and efficient performance. This was a solo project as part of the Northcoders bootcamp.",
        "MicroTech" : "I created a new modern website for a local asbestos testing and analysis company called MicroTech. Their new website offers a user-friendly experience that makes it easy to find their asbestos testing services. It also includes a contact form, making it simple to reach out. ",
        "Discord RNG Bot" : "Frost Giveaways is a discord server that hosts large giveaways for its community. I created a fun and interactive discord bot that generates a random number and listens for the first person to correctly guess the number.",
        "Product 5" : "This is the description of product 5. ofisdiufiusdhfuihisduhfs fiusdnfjds fsdj fsdijnfijdsnfjsd fjisd fjsdi fjsd fhsd fh sdhf sd fhds fjds dfjd ",
      }
  
      const productImg = {
          "Dancify" : "Dancify1.png",
          "NC Games" : "NC-Games2.png",
          "MicroTech" : "Microtech.png",
      }
  
      const productImg2 = {
          "Dancify" : "",
          "NC Games" : "./Images/NC-Games.png",
          "MicroTech" : "https://picsum.photos/200/300",
      }
      
      const githubLinks = {
        "Dancify" : "https://github.com/JSON-and-the-Arguments/dancify",
        "NC Games" : "https://github.com/Connor-Quinny/BE-NC-Games",
        "MicroTech" : "https://github.com/Connor-Quinny/MicroTech",
        "Discord RNG Bot" : "https://github.com/Connor-Quinny/RNG-Discord-Bot",
      }
      
      const demoLinks = {
          "Dancify" : "https://northcoders.com/projects/oct-2022/dancify",
          "NC Games" : "https://nc-games-frontend.netlify.app/",
          "MicroTech" : "https://microtechltd.netlify.app/",
          "Discord RNG Bot" : "https://discord.gg/frost-bets",
      }
  
      const techStackImages = {
          "Dancify" : ["./Images/react-native.png", "./Images/expo-icon.svg", "./Images/firebase.png", "./Images/axios.svg", "./Images/tailwindcss-icon.svg"], 
          "NC Games" : ["./Images/react-native.png", "./Images/javascript.svg", "./Images/postgresql.svg", "./Images/express.svg", "./Images/jest.svg"],
          "MicroTech" : ["./Images/react-native.png", "./Images/styled-components.png", "./Images/material-ui.png", "./Images/emailjs.png"], 
          "Discord RNG Bot" : ["./Images/javascript.svg", "./Images/nodejs-icon-alt.svg", "./Images/discord-icon.svg"], 
          "Product 5" : [], 
      } 
  
      const techStackCaptions = {
          "Dancify" : ["React-Native", "Expo", "Firebase", "Axios", "Tailwind"], 
          "NC Games" : ["React", "Javascript", "PostgreSQL", "Express.js", "Jest"],
          "MicroTech" : ["React", "Styled Components", "Material-UI", "Email.Js"], 
          "Discord RNG Bot" : ["Javascript", "Node.js", "Discord.js"], 
          "Product 5" : [], 
      } 
  
      document.addEventListener('DOMContentLoaded', (event) => {
    // Your existing code to load content
    
    // Get the first product box and simulate a click event
    const firstProductBox = document.querySelector('.product-box');
    if (firstProductBox) {
      firstProductBox.click();
    }
  });
  
  
  
  
  // Get the element you want to scroll
  var carousel = document.querySelector('.carousel ul');
  
  // Function to enable scrolling
  function enableScroll() {
    this.style.overflowY = 'scroll';
  }
  
  // Function to disable scrolling
  function disableScroll() {
    this.style.overflowY = 'hidden';
  }
  
  // Apply event listeners to each product box
  var productBoxes = document.querySelectorAll('.product-box');
  productBoxes.forEach(function(box) {
    box.addEventListener('mouseenter', enableScroll.bind(carousel));
    box.addEventListener('mouseleave', disableScroll.bind(carousel));
  });
  
  
  var lottiePlayer = document.createElement('lottie-player');
  
  // Set the attributes for the lottie-player
  lottiePlayer.setAttribute('src', 'https://lottie.host/eb92cc95-a5bd-47bd-a4ef-c5e1c78e0cf2/vcmxJ8uuo3.json');
  lottiePlayer.setAttribute('background', 'transparent');
  lottiePlayer.setAttribute('speed', '1');
  lottiePlayer.setAttribute('loop', '');
  lottiePlayer.setAttribute('autoplay', '');
  lottiePlayer.id = 'github';
  
  // Create a new lottie-player element
  var lottiePlayerNew = document.createElement('lottie-player');
  
  // Set the attributes for the new lottie-player
  lottiePlayerNew.setAttribute('src', 'https://lottie.host/59c1bf22-f078-4081-84c1-28939118f93b/MBCytn9Raf.json');
  lottiePlayerNew.setAttribute('background', 'transparent');
  lottiePlayerNew.setAttribute('speed', '1');
  lottiePlayerNew.setAttribute('loop', '');
  lottiePlayerNew.setAttribute('autoplay', '');
  lottiePlayerNew.id = 'demo';
  
  