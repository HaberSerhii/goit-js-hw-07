import { galleryItems } from "./gallery-items.js";
// Change code below this line
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

// galleryListItem.addEventListener("click", function (clickEvent) {
//   clickEvent.preventDefault();
//   if (clickEvent.target === clickEvent.currentTarget) {
//     return;
//   }
//   new SimpleLightbox(".gallery__item a", {
//     captionsData: "alt",
//     captionPosition: "bottom",
//     captionDelay: 250,
//   });
// });

const lightBox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
