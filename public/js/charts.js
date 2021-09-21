var chartObject = {};
var chartObject2 = {};

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
            label: 'Top Tech Companies w/ Most Job Openings',
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
      },
    });
  });

fetch(
  `http://api.adzuna.com/v1/api/jobs/us/history?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&category=it-jobs&content-type=application/json`,
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
            label: 'Avg Salary',
            data: month,
            backgroundColor: ['rgb(0, 0, 0)'],
            borderColor: ['rgb(16, 21, 23))'],
            borderWidth: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  });
// month
