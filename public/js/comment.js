const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document
    .querySelector('input[name="comment-body"]')
    .value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        user_id,
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
