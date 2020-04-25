
// /* cursor */

// const body = document.querySelector('body');
// console.log(body);
// document.addEventListener('mousemove',(e)=>
// {
//     console.log(e.pageX,e.pageY);
//     var bubble = document.querySelector('.bubble');
//     console.log(bubble);
//     var x = e.offsetX;
//     var y = e.offsetY;
//     bubble.style.top = y+'px';
//     bubble.style.left = x+'px';
//     bubble.style.display = 'block';
// });
/* carousel */

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');


console.log(images);

const prev = document.querySelector('.left');
const next = document.querySelector('.right');

let counter = 0;

next.addEventListener('click',()=>
{
    if(counter!=images.length-1)
    {
        counter++;
        let size = 100*counter;
        carousel.style.transform = 'translateX('+(-size)+'%)';
        console.log(counter);
        
    }
    
})

prev.addEventListener('click',()=>
{
    if(counter!=0)
    {
        counter--;
        let size = 100*counter;
        carousel.style.transform = 'translateX('+(-size)+'%)';
        console.log(counter);
    }
})


/*gsap */

var tl = gsap.timeline();

tl.from(".wrapper",1,{
    width : 0
})
.from("nav",0.5,{
    opacity : 0
})
.from(".main-left",1,{
    opacity : 0,
    x : '300'
})
.from(".main-carousel",1,{
    width : 0
})