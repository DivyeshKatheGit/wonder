const cards = document.querySelectorAll('.card');

const menu_links = document.querySelectorAll('.menu-item');
const btn = document.querySelector('#btn');
const menu = document.querySelector('.menu-icon');
const main_menu = document.querySelector('.main-menu');

const close = document.querySelector('.close');

let flag = false;
menu.addEventListener('click',()=>
{
    main_menu.classList.add('open');
    flag = true;
})

close.addEventListener('click',()=>
{
    main_menu.classList.remove('open');
    flag = false;
})


menu_links.forEach(menu=>
    {
        menu.addEventListener('click',()=>
        {
            console.log(menu.id);
                for(let i=0;i<cardindx;i++)
            {
                cards[i].removeChild(cards[i].firstChild);
            }
            search(menu.textContent);
            main_menu.classList.remove('open');

            document.querySelector('#search-box').value = menu.textContent;

        })
    })
let cardindx=0;
let query = 'minimal';
const client = "_6DI81iVDlmFvszde8P5kOOag05OzWCO1myPV7Gfils";

search(query);
document.addEventListener('keypress',(e)=>
{
    if(e.keyCode==13)
    {
        for(let i=0;i<cardindx;i++)
        {
            cards[i].removeChild(cards[i].firstChild);
        }
        query = document.querySelector('#search-box').value;
        search(query);
    }
})
btn.addEventListener('click',(e)=>
{    
        for(let i=0;i<cardindx;i++)
        {
            cards[i].removeChild(cards[i].firstChild);
        }
        query = document.querySelector('#search-box').value;
        search(query);
})
function search(query)
{
cardindx = 0;

const url1 = "https://api.unsplash.com/search/photos/?client_id="+client+"&query="+query;
//making request to api
fetch(url1).then(function(data)
{
    return data.json();
})
.then(function(data)
{
    console.log(data);
    data.results.forEach(photo =>
    {
        let image = document.createElement('img');
        image.src = photo.urls.small;
        cards[cardindx++].appendChild(image);
    })
})
const url2 = "https://api.unsplash.com/search/photos/?client_id="+client+"&query="+query+'s';
//making request to api
fetch(url2).then(function(data)
{
    return data.json();
})
.then(function(data)
{
    console.log(data);
    data.results.forEach(photo =>
    {
        let image = document.createElement('img');
        image.src = photo.urls.small;
        cards[cardindx++].appendChild(image);
    })
})
}
