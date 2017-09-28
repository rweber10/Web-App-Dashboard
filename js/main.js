/*----- Notification ul -----*/


$('#dropDownMenu').click(
  function() {
    $('.hiddenAlert').toggle();
    $('#circle').hide();
  }
);




/*----- Alert -----*/

const alert = document.querySelector('.alert');
const closeAlert = document.getElementById('close');

alert.addEventListener('click', () => {
  if (closeAlert.click) {
    alert.style.display = 'none';
  }                       
});

/*----- Web Traffic Charts -----*/

const trafficList = document.getElementById('traffic-list'); 
const buttons = trafficList.children; 


const HOUR = document.getElementById('hourTraffic');
let hourTraffic = new Chart(HOUR, {
  type: 'line',
  data: {
    labels: ["7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    datasets: [
      {
        data: [200, 500, 578, 650, 900, 1123, 1180, 1105, 1256, 1199, 983, 1444, 1651],
        backgroundColor: '#c79b9b',
        borderColor: '#714751',
        borderWidth: 1.5,
        fill: true,
        pointBackgroundColor: '#714751',
        pointBorderColor: '#cca300',
        pointRadius: 3,
        lineTension: 0,
        pointStyle: 'circle'
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    labels: {
      display: false,
      position: top
    },
    legend: {
      display: false
    },
  }
});



const DAY = document.getElementById('dayTraffic');
let dayTraffic = new Chart(DAY, {
  type: 'line',
  data: {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [4600, 4712, 4925, 5200, 4817, 5421, 5612],
        backgroundColor: '#c79b9b',
        borderColor: '#714751',
        borderWidth: 1.5,
        fill: true,
        pointBackgroundColor: '#714751',
        pointBorderColor: '#cca300',
        pointRadius: 3,
        lineTension: 0,
        pointStyle: 'circle'
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    labels: {
      display: false,
      position: top
    },
    legend: {
      display: false
    }
  }
});



const WEEK = document.getElementById('weekTraffic');
let weekTraffic = new Chart(WEEK, {
  type: 'line',
  data: {
    labels: ["8/13", "8/20", "8/27", "9/3", "9/10", "9/17", "9/24"],
    datasets: [
      {
        data: [12875, 12831, 13487, 13112, 13928, 14561, 15875],
        backgroundColor: '#c79b9b',
        borderColor: '#714751',
        borderWidth: 1.5,
        fill: true,
        pointBackgroundColor: '#714751',
        pointBorderColor: '#cca300',
        pointRadius: 3,
        lineTension: 0,
        pointStyle: 'circle'
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    labels: {
      display: false,
      position: top
    },
    legend: {
      display: false
    }
  }
});



const MONTH = document.getElementById('monthTraffic');
let monthTraffic = new Chart(MONTH, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [47125, 47854, 46221, 45821, 44987, 43994, 44254, 45666, 46857, 48599, 51225, 51894],
        backgroundColor: '#c79b9b',
        borderColor: '#714751',
        borderWidth: 1.5,
        fill: true,
        pointBackgroundColor: '#714751',
        pointBorderColor: '#cca300',
        pointRadius: 3,
        lineTension: 0,
        pointStyle: 'circle'
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    labels: {
      display: false,
      position: top
    },
    legend: {
      display: false
    }
  }
});


/*----- Hide and Show Graphs for Line Charts -----*/

const hour = document.getElementById('hourTraffic');
const day = document.getElementById('dayTraffic');
const week = document.getElementById('weekTraffic');
const month = document.getElementById('monthTraffic');

hour.className = 'show';
day.className = 'hidden';
week.className = 'hidden';
month.className = 'hidden';

const graphs = [hour, day, week, month]; 



//Loop through button clicks

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      buttons[0].className = '';
      buttons[1].className = '';
      buttons[2].className = '';
      buttons[3].className = '';
      graphs[0].className = 'hidden';
      graphs[1].className = 'hidden';
      graphs[2].className = 'hidden';
      graphs[3].className = 'hidden';
    if(e) {
      graphs[i].className = 'show';
      buttons[i].className = 'active';
      }
    });
}


//Daily Traffic Chart

const dailyTraffic = document.getElementById("dailyTraffic");

let dailyChart = new Chart(dailyTraffic, {
  type: 'bar',
  data: {
    labels: ["M", "Tu", "W", "Th", "F", "Sa", "Su"],
    datasets: [
      {
        data: [4600, 4712, 4925, 5200, 4817, 5421, 5612],
        backgroundColor: '#c79b9b',
        borderColor: '#714751',
        borderWidth: 1.5,
        fill: true,
        barPercentage: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    labels: {
      display: false,
      position: top
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
      ticks: {
        min: 4200,
        max: 5800,
        stepSize: 200
      }
    }]
    }
  }
});


//Daily Traffic Chart

const PIE = document.getElementById('pie');

let mobilePie = new Chart (PIE, {
  type: 'doughnut',
  data: {
    labels: ['phone', 'tablet', 'desktop'],
    datasets: [{
      data: ['48', '22', '30'],
      backgroundColor: ['rgba(70, 10, 209, .5)', 'rgba(235, 222, 82, .5)', 'rgba(240, 14, 37, .5)'],
      hoverBackgroundColor: ['rgba(70, 10, 209, 1)', 'rgba(235, 222, 82, 1)', 'rgba(240, 14, 37, 1)']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontSize: 17
      }
    },
    layout: {
      padding: 20
    },
    animation: {
      animateScale: true
    }
  }
});


/*----- Form errors and Submits -----*/


const Form = document.getElementById('message-button');
const userCast = document.getElementById('user-search');
const Error = document.getElementById(error);
const area = document.getElementById('message-user');

Form.addEventListener('click', () => {
  if ((Form.click) && (document.userform.username.value == '')) {
    document.getElementById('error').innerHTML = "Make sure all fields are filled out!";
    return false;
  } if ((Form.click) && (document.userform.message.value == '')) {
    document.getElementById('error').innerHTML = "Make sure all fields are filled out!";  
  } else {
    document.getElementById('error').innerHTML = "Congrats, your message was sent!";
  }                      
});



/*----- Local Storage -----*/

function save() {
  if (typeof(Storage) !== "undefined") {
    //localStorage/sessionStorage
    console.log('Yes! Local Storage Available')
    const emailNotifications = document.getElementById("email");
    localStorage.setItem("email", emailNotifications.checked);
    const profileToPublic = document.getElementById("public");
    localStorage.setItem("public", profileToPublic.checked);
    const timezoneValue = document.getElementById("time-zone").value;
    localStorage.setItem("timezoneValue", timezoneValue);
  } else {
      console.log('Sorry! No Web Storage support.')
    }
}     

//Load local storage
if (localStorage.length > 1) {
  const emailPreference = JSON.parse(localStorage.getItem("email"));
  document.getElementById("email").checked = emailPreference;
  const profilePreference = JSON.parse(localStorage.getItem("public"));
  document.getElementById("public").checked = profilePreference;
  const myTimezone = localStorage.getItem("timezoneValue");
  document.getElementById("time-zone").value = myTimezone;
}

//clear local storage
function cancel() {
  localStorage.clear();
  location.reload();
}
