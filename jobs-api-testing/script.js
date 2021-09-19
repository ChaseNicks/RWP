// We assign jobs as variable so we can change that based on the search value taken from the post cards
let jobs = 'it-jobs';

fetch(
  `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&results_per_page=10&category=${jobs}`,
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.results.map((job) => {
      console.log(job);
      document.querySelector('#jobs').innerHTML += `
      <div class="job">
      <strong>Job Title:</strong> ${job.title}.
      <br>
      <strong>Company:</strong> ${job.company.display_name}.
      <br>
      <strong>Description:</strong> ${job.description}
      <br>
      <strong>Location:</strong> ${job.location.area.reverse().join(', ')}.
      <br>
      <strong>Category:</strong> ${job.category.label}.
      <br>
      <br>
      <button><a href="${job.redirect_url}">Apply Now</a></button>
    
      </div>
      `;
    });
  });

fetch(
  `http://api.adzuna.com/v1/api/jobs/us/history?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&category=${jobs}&content-type=application/json`,
)
  .then((response) => response.json())
  .then((data) => {
    let latestSalary = Object.values(data.month)[
      Object.values(data.month).length - 1
    ];

    document.querySelector('#latestSalary').innerHTML = latestSalary;
  });

  // Chart.js for top tech companies with most job openings
var chartObject = {};

fetch(
  `http://api.adzuna.com/v1/api/jobs/us/top_companies?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&category=it-jobs&content-type=application/json`,
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
            datasets: [{
                label: 'Top Tech Companies w/ Most Job Openings',
                data: jobs_open,
                backgroundColor: [
                  "rgb(218, 247, 166)",
                  "rgb(255, 195, 0)",
                  "rgb(255, 87, 51)",
                  "rgb(199, 0, 57)",
                  "rgb(144, 12, 63)",
                  "rgb(88, 24, 69)",
                ],
                borderColor: 
                [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                ],
                borderWidth: 2,

            },
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
});
