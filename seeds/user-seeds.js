const { User } = require('../models');

const userData = [
  {
    username: 'larryW',
    email: 'larrywheels@gmail.com',
    password: 'pass12345',
    company: 'FaceBook',
    github_link: 'https://github.com/larrywheels',
  },
  {
    username: 'WalkerRoss',
    email: 'walker@gmail.com',
    password: 'pass123456',
    company: 'Goolge',
    github_link: 'https://github.com/walker',
  },
  {
    username: 'JamesNicks',
    email: 'james@gmail.com',
    password: 'pass1234567',
    company: 'Apple',
    github_link: 'https://github.com/jamesnicks',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
