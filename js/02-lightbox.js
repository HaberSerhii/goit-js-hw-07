import { galleryItems } from "./gallery-items.js";

const galleryListItem = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width="250px"
    />
  </a>
</li>
`
    )
    .join("");
}
galleryListItem.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

const lightBox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
