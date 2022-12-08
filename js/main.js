apisiteurl = "https://www.nytimes.com/";
// Установка длины заголовков
titlelength = 17;
subcontent = 40;
// Установка начальной страницы в выдаче апи
pagecount = 0;

function showContent(data) {

    output = document.getElementById('app');

    for (var i = 0; i < data.length; i++) {

        if (data[i]['multimedia'].length !== 0) {
            multimediaurl = `<img src="${apisiteurl + data[i]['multimedia'][0].url}" class="card-img-top" alt="${data[i]['multimedia'][0].caption}" title="${data[i]['multimedia'][0].caption}">`;
        }
        else {
            multimediaurl = ``;
        }

        if (data[i].type_of_material !== undefined) {
            type_of_material = data[i].type_of_material;
        } else {
            type_of_material = "";
        }

        main = data[i].headline.main.substring(0, titlelength);
        abstract = data[i].abstract.substring(0, subcontent);

        timeparse = Date.parse(data[i].pub_date);
        var ts = new Date(timeparse);
        pub_date = ts.toDateString();


        output.innerHTML += `<div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">${type_of_material}</strong>
            <h3 class="mb-0">${main}</h3>
            <div class="mb-1 text-muted">${pub_date}</div>
            <p class="card-text">${abstract}"</p>
            <a href="${data[i].web_url}" class="stretched-link" target="_blank">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <figure>      
                ${multimediaurl}
            </figure>
          </div>
        </div>
      </div>`;


    }
    return output.innerHTML;
}

async function getNews(searchline, pagecount) {
    url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchline + '&page=' + pagecount + '&api-key=PyhiiPxVYDixcOHUkG394DM64TbqAGJL';
    console.log(url);

    response = await fetch(url);
    if (response.ok) {
        let data = await response.json();

        console.log(data.response.docs);
        showContent(data.response.docs);
        return data;
    } else {
        console.log('error', response.status);
    }
}


function search() {
    // Поисковая строка
    searchline = document.getElementById('searchline').value;
    console.log(searchline);

    // Номер страницы результатов поиска
    pagecount = 0;
    element = document.getElementById('morenews');
    element.classList.remove("displayoff");

    getNews(searchline, pagecount);
}



function morenews() {
    pagecount = pagecount + 1;
    getNews(searchline, pagecount);
}


// Если пользователь доскролил до низа страницы
window.addEventListener('scroll', function () {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        morenews();
    }
});

