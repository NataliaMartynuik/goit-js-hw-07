import { galleryItems } from './gallery-items.js';
// Change code below this line

function makeGalleryMarkup ({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
}



const galleryList = document.querySelector('.gallery');

const makeGallery = galleryItems.map(makeGalleryMarkup).join(' ');

galleryList.insertAdjacentHTML('beforeend', makeGallery);

galleryList.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }

    event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  let gallery = new SimpleLightbox(".gallery a");

  gallery.on("show.simplelightbox", function () {
    gallery.captionDelay = 250;
  });
      
}

console.log(galleryItems);
