
const loadCatgory = () => {

    const url = `https://openapi.programming-hero.com/api/news/categories`

    fetch(url)
        .then(res => res.json())
        .then(data => displayShow(data.data.news_category))

}

const displayShow = (data) => {

    // console.log(data)

    const catagoriContainer = document.getElementById('catagoris-container');



    data.forEach(data => {

        console.log(data)

        const newDiv = document.createElement('div')

        newDiv.innerHTML = `
                
             <li  onclick="cotagoriesId('${data.category_id}')" class="text text-secondary p-4"> ${data.category_name} </li>
            `;

        catagoriContainer.appendChild(newDiv)

    })
}


// const inputNamber = document.getElementById('number');

// if (data.length > 0) {
//     inputNamber.value = ` ${data.length} items found `;
// } else {

//     inputNamber.value = 'No news found';
// }




const cotagoriesId = (id) => {

    // toggleSpinner(true)
    // console.log(id)
    fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)

        .then(res => res.json())
        .then(data => cotagoriesIdShow(data.data))

}

const cotagoriesIdShow = (data) => {
    console.log(data)
    const showContainer = document.getElementById('show-container')
    showContainer.textContent = '';
    data.forEach(data => {

        // console.log(data)

        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card mb-3" style="width:1120px;">
              <div class="row g-0">
              <div class="col-md-4">
                  <img src="${data.thumbnail_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title"> ${data.title}</h5>
                      <p class="card-text"> ${data.details.length > 250 ? data.details.slice(0, 250) + '...' : data.details}.</p>

                      <img class="rounded-5 mt-4 me-3" style="width: 50px;" src="${data.author.img}" class="img-fluid rounded-start" >
                      <span> ${data.author.name ? data.author.name : 'Not Found'} </span>
                        <span class="ps-4 pe-3"> <i class="fa-regular fa-eye"></i> ${data.total_view} </span>
                        <button onclick="showDetails('${data.category_id}')" class ="mx-5 pe-1 btn btn-primary">show ditails</button>
                  </div>
              </div>
          </div>
          </div>
              
              `;
        showContainer.appendChild(div)
    })

    // toggleSpinner(false)

}

//Toggele add 
// const toggleSpinner = (isloading) => {
//     const loadingCotent = document.getElementById('loading');

//     if (isloading) {
//         loadingCotent.classList.remove('d-none');
//     }
//     else {
//         loadingCotent.classList.add('d-none')
//     }
// }




const showDetails = modal => {
    fetch(`https://openapi.programming-hero.com/api/news/category/${modal}`)
        .then(res => res.json())
        .then(data => displayShowDetails(data.data))
}

// const displayShowDetails = data => {
//     data.forEach(data => {
//         console.log(data)

//         const modalBody = document.getElementById('modals-body');

//         modalBody.innerHTML = `

//             <img src="${data.author.img}" class="img-fluid rounded-start" alt="...">
//               <h3 class ="text-secondary pt-3"> Name : ${data.author.name ? data.author.name : 'data not Found'}  </h3>
//               <h5 class ="text-secondary pt-3"> Published date : ${data.author.published_date ? data.author.published_date : 'data not Found'}  </h5>
//               <p class="card-text"> ${data.details.length > 100 ? data.details.slice(0, 100) + '...' : data.details}.</p>
//             `;
//     })

// }



loadCatgory()


// const showDispl = () => {

//     const bloge = document.getElementById('blog')
//     if (isloading.length > 0) {
//         bloge.classList.remove('d-none');

//         bloge.innerText = bloge
//     }

// }


// showDispl()











