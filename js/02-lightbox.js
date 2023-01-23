import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

// creating and rendering of markup
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

// adding lightboxes
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});
