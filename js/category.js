
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

        console.log(data)

        const newDiv = document.createElement('div')

        newDiv.innerHTML = `
                
             <li class="text text-secondary p-4"> ${data.category_name} </li>
            
            `;

        catagoriContainer.appendChild(newDiv)

    })
}

loadCatgory()

