
const loadCatgory = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'

    fetch(url)
        .then(res => res.json())
        .then(data => displayShow(data.data.news_category))

}

const displayShow = (data) => {

    // console.log(data)

    const catagoriContainer = document.getElementById('catagoris-container');

    data.forEach(data => {

        // console.log(data)

        const newDiv = document.createElement('div')

        newDiv.innerHTML = `
                
             <li class="text text-secondary p-4"> ${data.category_name} </li>
            
            `;

        catagoriContainer.appendChild(newDiv)

    })
}

loadCatgory()

const cotagoriesId = () => {

    fetch('https://openapi.programming-hero.com/api/news/category/01')

        .then(res => res.json())
        .then(data => cotagoriesIdShow(data.data))

}

const cotagoriesIdShow = (data) => {

    // console.log(data)

    const showContainer = document.getElementById('show-container')

    showContainer.innerHTML = ``;

    data.forEach(data => {

        console.log(data)

        const div = document.createElement('div');

        div.innerHTML = `
        <div class="card mb-3" style="width: 1120px;">
              <div class="row g-4">
              <div class="col-md-4">
                  <img src="${data.thumbnail_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title"> ${data.title}</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
          </div>
          </div>
              
              `;

        showContainer.appendChild(div)
    })

}


cotagoriesId()


