import { galleryItems } from './gallery-items.js';

// Change code below this line

function makeGalleryMarkup ({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
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

  const modalImg = basicLightbox.create(`
    <div class="modal">
       <img src=${event.target.dataset.source} width="800" height="600"
    </div>`);
  
  modalImg.show();
  

  galleryList.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      modalImg.close();
    }
  }, { once: true });

}
console.log(galleryItems);
