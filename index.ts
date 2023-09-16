import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

// Check database connection
prisma.$connect()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });

// Welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the REST API');
});


import usersRouter from './users'; 
app.use('/users', usersRouter); 

import postsRouter from './posts'; 
app.use('/posts', postsRouter); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
