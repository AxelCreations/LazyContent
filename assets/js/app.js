import {RegisterImage} from './lazy.js';

/* Crear random con valores fijos */
const random = () => Math.floor(Math.random() * (120 - 2)) + 2;

const AddImageButton = document.getElementById('add-image');
const ImagesContainer = document.getElementById('images');

const createImageNode = () => {
    const picture = document.createElement('picture');

    const image = document.createElement('img');
    image.width = '320';
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    image.src = 'assets/img/placeholder.jpg';

    picture.appendChild(image);
    RegisterImage(image);
    
    return picture;
}

AddImageButton.addEventListener('click', () => {
    const newImage = createImageNode();
    ImagesContainer.appendChild(newImage);
});
