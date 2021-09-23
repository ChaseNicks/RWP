// document.addEventListener('DOMContentLoaded', function () {
//   // Get all "navbar-burger" elements
//   var $navbarDrop = Array.prototype.slice.call(
//     document.querySelectorAll('.navbar-dropdown'),
//     0,
//   );

//   // Check if there are any navbar burgers
//   if ($navbarDrop.length > 0) {
//     // Add a click event on each of them
//     $navbarDrop.forEach(function ($el) {
//       $el.addEventListener('click', function () {
//         // Get the target from the "data-target" attribute
//         var target = $el.dataset.target;
//         var $target = document.getElementById(target);

//         // Toggle the class on both the "navbar-burger" and the "navbar-menu"
//         $el.classList.toggle('is-active');
//         $target.classList.toggle('is-active');
//       });
//     });
//   }
// });

document.querySelectorAll('.navbar-link').forEach(function (navbarLink) {
  navbarLink.addEventListener('click', function () {
    navbarLink.nextElementSibling.classList.toggle('is-hidden-mobile');
  });
});

const postModal = document.querySelector('.new-post-modal');
const newPostBtn = document.querySelector('#newPostBtn');
const modalBg = document.querySelector('.modal-background');
const modalCloseBtn = document.querySelector('#modal-close-btn');

const postFormEl = document.querySelector('#new-post-form');
newPostBtn.addEventListener('click', () => {
  postModal.classList.add('is-active');
});
modalBg.addEventListener('click', () => {
  postModal.classList.remove('is-active');
});

// Script for toggling the dropdown menu on mobile.
const mobileDropdown = document.querySelector('.mobileDropdown');
const dropNav = document.querySelector('.dropNav');
const closeDropdown = document.querySelector('.navbar-brand');

mobileDropdown.addEventListener('click', () => {
  dropNav.classList.add('has-dropdown', 'is-active');
});
closeDropdown.addEventListener('click', () => {
  dropNav.classList.remove('has-dropdown', 'is-active');
});

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  console.log(title);
  const content = document.querySelector('input[name="post-content"]').value;
  console.log(content);
  const tag_id = document.querySelector('input[name="category"]:checked').value;
  console.log(tag_id);

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
      tag_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
