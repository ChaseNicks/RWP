const { Post } = require('../models');

const postData = [
    {
        id: 1,
        title: "Front End Basics",
        content: "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website",
        date_created: ,
        tag_id: 1,
        user_id: 3,
      },
      {
        id: 2,
        title: "Db Talk",
        content: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system",
        date_created: ,
        tag_id: 3,
        user_id: 3,
      },
      {
        id: 3,
        title: "Algo's",
        content: "a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer",
        date_created: ,
        tag_id: 6,
        user_id: 3,
      },
      {
        id: 4,
        title: "Front End Basics",
        content: "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website",
        date_created: ,
        tag_id: 1,
        user_id: 2,
      },
      {
        id: 5,
        title: "Db Talk",
        content: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system",
        date_created: ,
        tag_id: 3,
        user_id: 2,
      },
      {
        id: 6,
        title: "Algo's",
        content: "a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer",
        date_created: ,
        tag_id: 6,
        user_id: 2,
      },
      {
        id: 7,
        title: "Front End Basics",
        content: "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website",
        date_created: ,
        tag_id: 1,
        user_id: 1,
      },
      {
        id: 8,
        title: "Db Talk",
        content: "A database is an organized collection of structured information, or data, typically stored electronically in a computer system",
        date_created: ,
        tag_id: 3,
        user_id: 1,
      },
      {
        id: 9,
        title: "Algo's",
        content: "a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer",
        date_created: ,
        tag_id: 6,
        user_id: 1,
      },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;