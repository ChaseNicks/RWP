const postModal = document.querySelector(".new-post-modal");
const newPostBtn = document.querySelector("#newPostBtn");
const modalBg = document.querySelector(".modal-background");
const modalCloseBtn = document.querySelector("#modal-close-btn");

const postFormEl = document.querySelector("#new-post-form");

newPostBtn.addEventListener("click", () => {
    postModal.classList.add("is-active"); 
});
modalBg.addEventListener("click", () => {
    postModal.classList.remove("is-active");
});