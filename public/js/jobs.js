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
     
    <section>  
    <div class="card-content job-stlye">
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
                <li id="job-info">${job.description}</li>
                <li id="job-info">${job.location.area.reverse().join(', ')}</li>
                <li id="job-info">Category: ${job.category.label}</li>
            </ul>
           
            
        </div>
        <p id="date-posted">Posted On: ${
          new Date(job.created).getMonth() + 1
        }/${new Date(job.created).getDate()}/${new Date(
        job.created,
      ).getFullYear()}</p>
        <button class="apply-btn"><a href="${
          job.redirect_url
        }" target="_blank">Apply</a></button>
    </div>
    </section>


      `;
    });
  });
