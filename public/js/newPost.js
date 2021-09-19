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

const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  console.log(title);
  const content = document.querySelector('input[name="post-content"]').value;
  console.log(content);
  const tag = document.querySelector('input[name="post-tags"]:checked').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
      tag,
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

// console.log(tag);
