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

function valid(){
  swal("YES! VALID WEBSITE!", "This is a safe website.", "success", {
      button: "More info",
    }).then((value) => {
      displayResult(validWebsiteData);});
}

function invalid(){
  swal("OH NO! INVALID WEBSITE!", "This website is not safe.", "error", {
      button: "More info",
  }).then((value) => {
    displayResult(invalidWebsiteData);});
}


// Function to go back to the website checker page
function goBack() {
  window.location.reload(); 
}
