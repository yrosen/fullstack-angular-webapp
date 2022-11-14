
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { PrismaClient } from '../shared/types.g/index.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// You'll want to have a better way of making
// this available throughout your app, e.g. with
// Express' app locals
const DB_CLIENT = new PrismaClient();

app.get('/', (req: Request, res: Response) => {
  return res.json({message: 'Hello World!' });
});

app.get('/todos', async (req: Request, res: Response) => {
  const todos = await DB_CLIENT.todo.findMany();

  return res.json(todos);
});

app.post('/todo', async (req: Request, res: Response) => {
  // Good place here to validate req.body

  const resp = await DB_CLIENT.todo.create({
    data: req.body.todo
  });

  return res.json({ resp });
});

export { app };