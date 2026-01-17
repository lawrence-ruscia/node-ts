import express from 'express';
import 'dotenv/config';
import path from 'node:path';
import type { Request, Response, NextFunction } from 'express';
import type { CustomError } from './shared/domain/errors/error.js';

const app = express();
const PORT = process.env.PORT ?? 3000;
const dirname = import.meta.dirname;

// App-level Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// App Config
app.set('views', path.join(dirname, 'views'));
app.set('view engine', 'ejs');

// Routers

// Error Handler Middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(err?.statusCode || 500).send(err.message);
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running on port ${PORT.toString()}`);
});
