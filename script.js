

let getNews = async() =>{
    try{
        let url = `https://openapi.programming-hero.com/api/news/category/08`;
    let res = await fetch(url);
    let data = await res.json();
    separateNews(data.data);
    }catch(error){
console.log(error);
    }
}

let separateNews = (news) =>{

// Filtering news amount 
let sliceNews = news.slice(0,10);

sliceNews.forEach(singleNews => {
    // console.log(singleNews)


    // First paragraph word limit set
let splitNewsDetails = singleNews.details.split(' ');
let firstParaWordLimit = splitNewsDetails.slice(1,70);
let firstPara = firstParaWordLimit.join(' ');

// Second paragraph word limit set
let secondParaWordLimit = splitNewsDetails.slice(80,110);
let secondPara = secondParaWordLimit.join(' ');


// Select the news container
    let newsContainer = document.getElementById('newsContainer');
    // creating a div
    let row = document.createElement('div');
    row.classList.add("row", "rounded", "shadow-lg");
    // adding class to the div
    row.innerHTML = `
    <div class="col-md-3 p-3">
            <!-- image -->
            <img src= "${singleNews.thumbnail_url}" class="img-fluid rounded h-100" alt="...">
          </div>
          <div class="col-md-9">
            <!-- Card Body -->
            <div class="card-body pb-4">
              <h5 class="card-title pt-4 fw-bold">${singleNews.title}</h5>
              <p class="card-text text-secondary"> ${firstPara}</p>
              <p class="card-text text-secondary">${secondPara}...</p>

                <!-- Card Footer -->
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-3">
                        
                            <img src="${singleNews.author.img}" style="height: 45px; width: 45px;" class="img-fluid rounded-circle" alt="">
                        
                       <div>
                            <p class="mb-0">${singleNews.author.name ? singleNews.author.name : 'Unknown'}</p>
                            <p class="mb-0 text-secondary"><small>${singleNews.author.published_date? singleNews.author.published_date : 'Unknown'}</small></p>
                        </div>
                        
                    </div>
                    <div>
                        <i class="bi bi-eye me-3"></i>
                        <span class="fw-bold text-secondary">${singleNews.total_view ? singleNews.total_view : 'Unknown'}</span>
                    </div>
                    <div class="d-flex gap-5 align-items-center">

                        <div class="me-5 text-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                        </div>
                        
                        <i class="bi bi-arrow-right-circle text-success fs-3" onclick = "newsDetails('${singleNews._id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                        
                    </div>
                </div>
            </div>
          </div>
    `

    newsContainer.appendChild(row);
});

}


let newsDetails = async(newsId) =>{
    let url = `https://openapi.programming-hero.com/api/news/${newsId}`;
    let res = await fetch(url);
    let data = await res.json();
    individualNewsDetails(data.data[0]);

}


let individualNewsDetails = (mainData) =>{
console.log(mainData)


// Modal Body
let modalBody = document.getElementById('modal-body');
modalBody.innerHTML = `
<div class="card mx-auto" style="width: 100%;">
  <img src="${mainData.image_url}" class="card-img-top img-fluid mx-auto" alt="...">
  <div class="card-body">
    <h5 class="card-title">${mainData.title ? mainData.title : 'Unknown'}</h5>

<small><b class="text-secondary">${mainData.author.name? mainData.author.name : 'Unknown'}, ${mainData.author.published_date ? mainData.author.published_date : 'Unknown'}, ${mainData.rating.number? mainData.rating.number:'No Rating'} <i class="bi bi-star-fill text-warning"></i> </b>  </small>

    <p class="card-text p-3"><b>News:</b> ${mainData.details ? mainData.details : 'Unknown'}</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>

`

}
getNews()

let ul = document.querySelectorAll('#secondNav li');
console.log(ul)