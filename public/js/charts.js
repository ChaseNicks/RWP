var chartObject = {};
var chartObject2 = {};
var chartObject3 = {};
var chartObject4 = {};

fetch(
  `https://api.adzuna.com/v1/api/jobs/us/top_companies?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&category=it-jobs&content-type=application/json`,
)
  .then((response) => response.json())
  .then((data) => {
    var companies = data.leaderboard.map(function (elem) {
      return elem.canonical_name;
    });
    var jobs_open = data.leaderboard.map(function (elem) {
      return elem.count;
    });
    var ctx = document.getElementById('MyChart').getContext('2d');
    chartObject.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: companies,
        datasets: [
          {
            label: '# of Job Ads',
            data: jobs_open,
            backgroundColor: [
              'rgb(218, 247, 166)',
              'rgb(255, 195, 0)',
              'rgb(255, 87, 51)',
              'rgb(199, 0, 57)',
              'rgb(144, 12, 63)',
              'rgb(88, 24, 69)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
        plugins: {
          title: {
            display: true,
            color: 'rgb(0, 0, 0)',
            text: 'Top Tech Companies by Job Ads',
            font: {
              size: 30,
            },
          },
          legend: {
            display: true,
            labels: {
              color: 'rgb(0, 0, 0)',
            },
          },
        },
      },
    });
  });

fetch(
  `https://api.adzuna.com/v1/api/jobs/us/history?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&category=it-jobs&content-type=application/json`,
)
  .then((response) => response.json())
  .then((data) => {
    const month = Object.keys(data.month)
      .sort()
      .reduce((a, b) => ((a[b] = data.month[b]), a), {});

    const ctx = document.getElementById('MyChart2').getContext('2d');
    chartObject2.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Salary',
            data: month,
            borderColor: ['rgb(16, 21, 23)'],
            drawOnChartArea: true,
            borderWidth: 3,
            pointBackgroundColor: ['rgb(255, 87, 51)'],
            pointRadius: 8,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 0.2,
            to: 0,
            loop: true,
          },
        },
        plugins: {
          title: {
            display: true,
            color: 'rgb(0, 0, 0)',
            text: 'Averages Tech Job Salary',
            font: {
              size: 30,
            },
          },
          legend: {
            display: true,
            labels: {
              color: 'rgb(0, 0, 0)',
            },
          },
        },
      },
    });
  });

fetch(
  `https://api.adzuna.com/v1/api/jobs/us/geodata?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&category=it-jobs&content-type=application/json`,
)
  .then((response) => response.json())
  .then((data) => {
    var place = data.locations.map(function (elem) {
      return elem.location.display_name;
    });
    console.log(place);
    var jobs_open = data.locations.map(function (elem) {
      return elem.count;
    });
    console.log(jobs_open);
    var ctx = document.getElementById('MyChart3').getContext('2d');
    chartObject3.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: place,
        datasets: [
          {
            label: '# of Job Ads',
            data: jobs_open,
            backgroundColor: [
              'rgb(218, 247, 166)',
              'rgb(255, 195, 0)',
              'rgb(255, 87, 51)',
              'rgb(199, 0, 57)',
              'rgb(144, 12, 63)',
              'rgb(88, 24, 69)',
              'rgb(118, 4, 400)',
              'rgb(400, 50, 420)',
              'rgb(341, 223, 40)',
              'rgb(68, 350, 98)',
              'rgb(148, 213, 99)',
              'rgb(444, 50, 20)',
              'rgb(255, 255, 255)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            color: 'rgb(0, 0, 0)',
            text: 'Tech Job Ads by State',
            font: {
              size: 30,
            },
          },
          legend: {
            display: true,
            labels: {
              color: 'rgb(0, 0, 0)',
            },
          },
        },
      },
    });
  });

fetch(
  `https://api.adzuna.com/v1/api/jobs/us/histogram?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&category=it-jobs&content-type=application/json`,
)
  .then((response) => response.json())
  .then((data) => {
    const month = Object.keys(data.histogram)
      .sort()
      .reduce((a, b) => ((a[b] = data.histogram[b]), a), {});
    var ctx = document.getElementById('MyChart4').getContext('2d');
    chartObject4.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: '# of people per salary range',
            data: month,
            backgroundColor: [
              'rgb(218, 247, 166)',
              'rgb(255, 195, 0)',
              'rgb(255, 87, 51)',
              'rgb(199, 0, 57)',
              'rgb(144, 12, 63)',
              'rgb(88, 24, 69)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
        plugins: {
          title: {
            display: true,
            color: 'rgb(0, 0, 0)',
            text: 'Number of Tech Career Respondents Per Salary Range',
            font: {
              size: 30,
            },
          },
          legend: {
            display: true,
            labels: {
              color: 'rgb(0, 0, 0)',
            },
          },
        },
      },
    });
  });
