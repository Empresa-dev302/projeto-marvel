//Fazendo slideshow
let imagens =['img/heroi1.jpeg', 'img/heroi2.jpeg', 'img/heroi3.jpeg', 'img/heroi4.jpeg', 'img/heroi5.jpg', 'img/heroi6.jpg', 'img/heroi7.jpeg', 'img/heroi8.jpeg'];
let index = 0;
let time = 3000;

function slideshow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideshow()', time);
}
slideshow();