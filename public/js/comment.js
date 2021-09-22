const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment = document
    .querySelector('input[name="comment-body"]')
    .value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#comment-form')
  .addEventListener('submit', commentFormHandler);

const deleteButtonHandler = async (event) => {
  event.preventDefault();

  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/comments/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

const commentBlock = document.querySelector('#delete-comment');

if (commentBlock) {
  commentBlock.addEventListener('click', deleteButtonHandler);
}
