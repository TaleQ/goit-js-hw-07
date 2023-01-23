import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

// creating and rendering of markup
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
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
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

// adding lightboxes
const openImage = (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const src = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${src}">`);
  instance.show();
  if (instance.visible() === true) {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  }
};

gallery.addEventListener("click", openImage);
