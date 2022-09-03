

let getNews = async() =>{
    let url = `https://openapi.programming-hero.com/api/news/category/01`;
    let res = await fetch(url);
    let data = await res.json();
    separateNews(data.data);
}

let separateNews = (news) =>{
console.log(news);

news.forEach(singleNews => {
    console.log(singleNews)

    let newsContainer = document.getElementById('newsContainer');
    let row = document.createElement('div');
    row.classList.add("row", "rounded", "shadow-lg");
    row.innerHTML = `
    <div class="col-md-3 p-3">
            <!-- image -->
            <img src="https://us.123rf.com/450wm/sidelnikov/sidelnikov1511/sidelnikov151100359/47874026-portrait-of-stylish-handsome-young-man-with-bristle-standing-outdoors-and-leaning-on-wall-man-wearin.jpg?ver=6" class="img-fluid rounded h-100" alt="...">
          </div>
          <div class="col-md-9">
            <!-- Card Body -->
            <div class="card-body pb-4">
              <h5 class="card-title pt-4 fw-bold">The best fashion influencers to follow for sartorial inspiration</h5>
              <p class="card-text text-secondary">From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the
                best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer roundup.
                </p>
              <p class="card-text text-secondary">Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black
                Friday and Gucci Black Friday...</p>

                <!-- Card Footer -->
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center gap-3">
                        
                            <img src="https://randomuser.me/api/portraits/women/64.jpg" style="height: 45px; width: 45px;" class="img-fluid rounded-circle" alt="">
                        
                       <div>
                            <p class="mb-0">Jane Cooper</p>
                            <p class="mb-0 text-secondary"><small>Jan 10, 2022 </small></p>
                        </div>
                        
                    </div>
                    <div>
                        <i class="bi bi-eye me-3"></i>
                        <span class="fw-bold text-secondary">1.5M</span>
                    </div>
                    <div class="d-flex gap-5 align-items-center">

                        <div class="me-5 text-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                        </div>
                        
                        <i class="bi bi-arrow-right-circle text-success fs-3"></i>
                        
                    </div>
                </div>
            </div>
          </div>
    `

    newsContainer.appendChild(row);
});
}


getNews()