const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: "larryW",
    email: "larrywheels@gmail.com",
    password: "pass12345",
    company: "FaceBook",
    github_link: "https://github.com/larrywheels"

  },
  {
    id: 2,
    username: "WalkerRoss",
    email: "walker@gmail.com",
    password: "pass123456",
    company: "Goolge",
    github_link: "https://github.com/walker"

  },
  {
    id: 3,
    username: "JamesNicks",
    email: "james@gmail.com",
    password: "pass1234567",
    company: "Apple",
    github_link: "https://github.com/jamesnicks"

  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;