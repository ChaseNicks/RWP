var dropdown = document.querySelector('.options-drop');
dropdown.addEventListener('click', (event) => {
  event.stopPropagation();
  dropdown.classList.toggle('is-active');
});

const deleteFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      post_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#delete-post')
  .addEventListener('click', deleteFormHandler);
