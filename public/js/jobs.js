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
     
      
    <div class="card-content">
        <div class="media jobs-media">
            <div class="media-content job-titles">
                <p class="title is-8 job-title">${job.title}</p>
                <p class="subtitle is-8 company-name">${
                  job.company.display_name
                }</p>
            </div>
        </div>
        <div class="content jobs-content">
            <ul class="job-info">
                <li>${job.description}</li>
                <li>${job.location.area.reverse().join(', ')}</li>
                <li>${job.category.label}</li>
            </ul>
            <br />
            <a href="#">#tags</a> <a href="#">#tags</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
        <button class="apply-btn"><a href="${
          job.redirect_url
        }" target="_blank">Apply</a></button>
    </div>


      `;
    });
  });
