const { Post } = require('../models');

const postData = [
  {
    title: 'Front End Basics',
    content:
      'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website',
    tag_id: 1,
    user_id: 3,
  },
  {
    title: 'Db Talk',
    content:
      'A database is an organized collection of structured information, or data, typically stored electronically in a computer system',
    tag_id: 3,
    user_id: 3,
  },
  {
    title: "Algo's",
    content:
      'a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer',
    tag_id: 6,
    user_id: 3,
  },
  {
    title: 'Front End Basics',
    content:
      'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website',
    tag_id: 1,
    user_id: 2,
  },
  {
    title: 'Db Talk',
    content:
      'A database is an organized collection of structured information, or data, typically stored electronically in a computer system',
    tag_id: 3,
    user_id: 2,
  },
  {
    title: "Algo's",
    content:
      'a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer',
    tag_id: 6,
    user_id: 2,
  },
  {
    title: 'Front End Basics',
    content:
      'Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website',
    tag_id: 1,
    user_id: 1,
  },
  {
    title: 'Db Talk',
    content:
      'A database is an organized collection of structured information, or data, typically stored electronically in a computer system',
    tag_id: 3,
    user_id: 1,
  },
  {
    title: "Algo's",
    content:
      'a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer',
    tag_id: 6,
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
