console.log("this is a js file")
//2b87ef4482834167b1949a37684b830d  news api key
//initaile news parameters
let source = 'google-news-in';
let apiKey = '2b87ef4482834167b1949a37684b830d';
let accordionNews = document.getElementById("accordionNews")
//create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)
//what to do when request is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles=json.articles
        let newshtml=""
        articles.forEach(function(element,index){

          
      
          let html = `


<div class="accordion-item">
          <h2 class="accordion-header collapsed" id="heading${index}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse">
              ${element.title}
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#accordionNews">
            <div class="accordion-body">
              <strong>${element.description}<a href=${element.url} target="_blank">read more...</a>
            </div>
          </div>
        </div>
        `
        newshtml+=html
      });
      accordionNews.innerHTML=newshtml;
        }
     else {
        console.log("some error")
    }
}

xhr.send()
