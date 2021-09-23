const { User } = require('../models');

const userData = [
  {
    username: 'larryW',
    email: 'larrywheels@gmail.com',
    password: 'pass12345',
    company: 'FaceBook',
    github_link: 'https://github.com/larrywheels',
    bio: 'I’m a software engineer in Santa Barbara, CA with a passion for computer science, electrical engineering and embedded systems technology.',
  },
  {
    username: 'WalkerRoss',
    email: 'walker@gmail.com',
    password: 'pass123456',
    company: 'Google',
    github_link: 'https://github.com/walker',
    bio: 'A love for data and pulling important insights to drive better business decisions',
  },
  {
    username: 'JamesNicks',
    email: 'james@gmail.com',
    password: 'pass1234567',
    company: 'Apple',
    github_link: 'https://github.com/jamesnicks',
    bio: 'Results-focused professional with strength in data analytics, full-stack development and being a team player. Proficient in leveraging my technological knowledge to promote business advancement and development. Adept at managing concurrent objectives to promote efficiency and influence positive outcomes',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
