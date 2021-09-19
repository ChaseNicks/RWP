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
      Job Title : ${job.title}
      <br>
      Company: ${job.company.display_name}
      <br>
      Location: ${job.location.area.reverse().join(', ')}
      <br>
      Category: ${job.category.label}
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
    // Returns the last salary from the fetched data
    let latestSalary = Object.values(data.month)[
      Object.values(data.month).length - 1
    ];

    document.querySelector('#latestSalary').innerHTML = latestSalary;
  });
