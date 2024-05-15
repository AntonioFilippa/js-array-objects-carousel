//<!-- MILESTONE 1 - markup statico delle immagini
//<div class="item active">
  //  <img src="./img/01.jpg" alt="">
//</div> 
//-->

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//RECUPERO CONTAINER PER ELEMENTI
const containerItems = document.querySelector('.items');//PER TUTTI GLI ELEMENTI DEL CAROSELLO
//PULSANTE NEXT

const btnNext = document.querySelector('.next');
//PULSANTE PREVIOUS

const btnPrev = document.querySelector('.prev');

//INDEX SLIDE ATTIVO ATTUALMENTE

let activeSlide = 0;

//FUNZIONE PER CREARE ELEMENTO NEL CAROSELLO

function createCarouselItem(imageObject) {
    const item = document.createElement('div');
    item.classList.add('item'); //AGGIUNGO LA CLASSE ITEM ALL'ELEMENTO

    const img = document.createElement('img');
    img.src = imageObject.image;
    img.alt = imageObject.title;

    const title = document.createElement('h3')
    title.textContent = imageObject.title;

    const text = document.createElement('p')
    text.textContent = imageObject.text;

    //APPEND
    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(text);

    //RETURN
    return item;
    
}
