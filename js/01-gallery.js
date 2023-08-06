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
galleryListItem.addEventListener("click", function (clickEvent) {
  clickEvent.preventDefault();
  if (clickEvent.target === clickEvent.currentTarget) {
    return;
  }
  const bigImage = galleryItems.find(
    ({ original }) => original === clickEvent.target.dataset.source
  );
  const modalWindow = basicLightbox.create(
    `<div class="modal">
    <img src="${bigImage.original}" alt="${bigImage.description}" width="800px">
    </div>`
  );
  modalWindow.show();

  const escapeWindow = (escEvent) => {
    if (escEvent.key === "Escape") {
      modalWindow.close();
      document.removeEventListener("keydown", escapeWindow);
    }
  };
  document.addEventListener("keydown", escapeWindow);
});
