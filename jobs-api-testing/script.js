fetch("https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&results_per_page=10&category=it-jobs")
  .then (response => response.json())
  .then (data => console.log(data));

  fetch("http://api.adzuna.com/v1/api/jobs/us/history?app_id=93a9f958&app_key=64741373e2fc20513e2967dc826628ff&category=it-jobs&content-type=application/json")
  .then (response => response.json())
  .then (data => console.log(data));