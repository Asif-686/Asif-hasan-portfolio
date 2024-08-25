document.addEventListener("DOMContentLoaded", function() {
    const words = ['Web Developer', 'Web Designer', 'Wordpress Developer', 'Frontend Developer', 'Digital Marketer','SEO Expert'];
    const textContainer = document.querySelector('.word');
    let wordIndex = 0;
  
    function animateWord() {
      const word = words[wordIndex];
      textContainer.textContent = '';
  
      word.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.style.display = 'inline-block';
        span.style.transition = `transform .9s ease-out ${index * 0.15}s, opacity .9s ease-in ${index * 0.15}s`;
        span.style.transform = 'translateY(-30px) rotateX(-15deg)'; 
        span.style.opacity = 0;


        textContainer.appendChild(span);
  
        setTimeout(() => {
            span.style.transform = 'translateY(0) rotateX(0)';
          span.style.opacity = 1;
        }, 50);
      });
  
      setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        animateWord();
      }, word.length * 100 + 2000);
    }
  
    animateWord();
  });


const ratings = document.querySelectorAll('.rating');

const observerOptions = {
    root: null, 
    threshold: 0.1, 
};

const animateRating = (rating) => {
    const target = parseInt(rating.querySelector('.counter').dataset.target, 10);
    for (let i = 1; i <= 100; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        block.style.transform = `rotate(${i * 3.6}deg)`;
        block.style.animationDelay = `${i / 40}s`;
        if (i <= target) {
            block.style.background = 'var(--hover-color)';
            block.style.boxShadow = `0 0 10px var(--hover-color)`;
        }
        rating.appendChild(block);
    }
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateRating(entry.target);
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

ratings.forEach(rating => {
    observer.observe(rating);
});

  

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navlist a');
  
  window.addEventListener('scroll', () => {
      let current = sections[0].id;
  
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
  
          if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
          }
      });
  
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(current)) {
              link.classList.add('active');
          }
      });
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar span');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target); // Stop observing once the animation starts
            }
        });
    }, {
        threshold: 0.5 // Adjust the threshold as needed
    });

    skillBars.forEach(bar => {
        bar.style.animationPlayState = 'paused'; // Pause animations initially
        observer.observe(bar); // Start observing the skill bars
    });
});








// Select the header
const header = document.querySelector('header');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position.
// Remove "sticky" when you leave the scroll position.
window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});



const backToHomeButton = document.getElementById('backToHome');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show the button after scrolling 300px
        backToHomeButton.classList.add('show');
    } else {
        backToHomeButton.classList.remove('show');
    }
});

backToHomeButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the top
    });
});

//Project section
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('portfolio-gallary');
    const buttons = document.querySelectorAll('.f-btn');

    // Function to display projects based on the selected category
    function displayProjects(category) {
        gallery.innerHTML = ''; // Clear previous projects

        const filteredProjects = projects.filter(project => 
            category === 'all' || project.category === category
        );

        filteredProjects.forEach(project => {
            const portBox = document.createElement('div');
            portBox.classList.add('port-box');
            portBox.innerHTML = `
                <div class="port-image">
                    <img src="${project.image}" alt="">
                </div>
                <div class="port-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}"><i class='bx bx-link-external'></i></a>
                </div>
            `;
            gallery.appendChild(portBox);
        });
    }

    // Initially display all projects
    displayProjects('all');

    // Add event listeners to filter buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-filter');
            displayProjects(category);
        });
    });
});



document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const url = 'https://script.google.com/macros/s/AKfycbwwU2YNwOu4BQWLXRkYscgcyOHkEfFCta4Du6vsyo37u60SUGtKh0KObbwD1TwXaLKV/exec'; // Replace with your deployment URL
    const formData = new FormData(this);
    const messageDiv = document.getElementById('response-message');

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            messageDiv.textContent = 'Message sent successfully!';
            messageDiv.className = 'response-message success show';
            setTimeout(() => {
                messageDiv.textContent = ''
                messageDiv.className = ''
            }, 3000)

            document.getElementById('contact-form').reset();
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => {
        messageDiv.textContent = 'There was a problem sending your message.';
        messageDiv.className = 'response-message error';
    });
});





  

  
  
