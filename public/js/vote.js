const upVoteArrows = document.querySelectorAll('.upVote-arrow');

const downVoteArrows = document.querySelectorAll('.downVote-arrow');
console.log(downVoteArrows);
console.log(upVoteArrows);

const upVoteArrowsHandler = async (event) => {
  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/posts/upvote/${id}`, {
    method: 'PUT',
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

const downVoteArrowsHandler = async (event) => {
  const id = event.target.getAttribute('data-id');

  const response = await fetch(`/api/posts/downvote/${id}`, {
    method: 'PUT',
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

if (upVoteArrows.length) {
  upVoteArrows.forEach((upVoteArrow) => {
    upVoteArrow.addEventListener('click', upVoteArrowsHandler);
  });
}

if (downVoteArrows.length) {
  downVoteArrows.forEach((downVoteArrow) => {
    downVoteArrow.addEventListener('click', downVoteArrowsHandler);
  });
}
