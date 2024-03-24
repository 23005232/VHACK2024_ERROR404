let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
//navigation bar
let menu= document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
});
window.onscroll= () => {
    navbar.classList.remove("active");
};
// header
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event and reveal animation from bottom
function handleScroll() {
    var elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('revealed');
        } else {
            element.classList.remove('revealed'); // Remove the animation class if element is not in viewport
        }
    });
}

// Function to handle reveal animation for the boxes (from bottom)
function handleRevealAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        } else {
            entry.target.classList.remove('revealed'); // Remove the animation class if element is not in viewport
        }
    });
}

// Create an intersection observer instance (for bottom reveal)
const observer = new IntersectionObserver(handleRevealAnimation, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Adjust this threshold as needed for when to trigger the animation
});

// Observe the boxes for intersection with the viewport
document.querySelectorAll('.box').forEach(box => {
    observer.observe(box);
});

// Initial check when the page loads
handleScroll();

// Listen for scroll events (to trigger bottom reveal)
window.addEventListener('scroll', handleScroll);

// Function to handle reveal animation for the about image (from left)
function handleAboutAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('about-animation');
        } else {
            entry.target.classList.remove('about-animation'); // Remove the animation class if element is not in viewport
        }
    });
}

// Create an intersection observer instance (for about image reveal)
const aboutObserver = new IntersectionObserver(handleAboutAnimation, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
});

// Observe the about image for intersection with the viewport
document.querySelectorAll('.animate-left').forEach(image => {
    aboutObserver.observe(image);
});

const validWebsiteData = {
    message: "This website is valid.",
    percentages: [80, 20],
    backgroundColors: ["#008C45", "#CD212A"], 
    image: "valid.jpg"
  };
  
  
  const invalidWebsiteData = {
    message: "This website is invalid.",
    percentages: [10, 90],
    backgroundColors: ["#008C45", "#CD212A"], 
    image: "invalid.png" 
  };
  
  
  // Get the canvas element
  const canvas = document.getElementById('pie-chart');
  
  // Function to draw the pie chart
  function drawPieChart(data) {
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Valid', 'Invalid'],
        datasets: [{
          data: data.percentages,
          backgroundColor: data.backgroundColors,
          borderColor: data.backgroundColors,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              let dataset = data.datasets[tooltipItem.datasetIndex];
              let total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
              let currentValue = dataset.data[tooltipItem.index];
              let percentage = Math.round((currentValue / total) * 100);
              return percentage + '%'; 
            },
            labelTextColor: function(tooltipItem, chart) {
              return 'white'; 
            }
          },
          padding: 10, 
          bodyFontSize: 16, 
        },
        plugins: {
          legend: {
            labels: {
              color: 'white' 
            }
          }
        }
      }
    });
  }
  
  function valid(){
  swal({
    title: "YES! VALID WEBSITE!",
    text: "This is a safe website.",
    icon: "correctpic.png", // Specify the URL of your custom image here
    button: "More info",
  }).then((value) => {
    displayResult(validWebsiteData);});
  }
    
  

function invalid(){
  swal("OH NO! INVALID WEBSITE!", "This website is not safe.", "wrongpic.png", {
      button: "More info",
  }).then((value) => {
    displayResult(invalidWebsiteData);});
}
  
  // Function to display the result, draw pie chart, and set image
  function displayResult(data) {
    document.getElementById('result').innerText = data.message;
    drawPieChart(data);
    document.getElementById('imageContainer').innerHTML = `<img src="${data.image}" alt="Website Screenshot">`;
    document.getElementById('backButton').style.display = 'block'; 
  }
  
  // Function to check the website validity and display result
  function checkWebsite() {
    const url = document.getElementById('websiteInput').value;
    if (url === 'https://spectrum.um.edu.my/') {
      valid();
    } else if (url === 'https://bantuantunairakyat-btr2023.dweb0.com/') {
      invalid();
    } else {
      alert("Unknown website.");
    }
    document.getElementById('backButton').style.display = 'block';
  }
  
  // Function to go back to the website checker page
  function goBack() {
    window.location.reload(); 
  }

  let profileDropdownList = document.querySelector(".profile-dropdown-list");
  let btn = document.querySelector(".profile-dropdown-btn");
  
  let classList = profileDropdownList.classList;
  
  const toggle = () => classList.toggle("active");
  
  window.addEventListener("click", function (e) {
    if (!btn.contains(e.target)) classList.remove("active");
  });
