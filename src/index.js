require('express-async-errors');
require('dotenv').config({});
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers/router');
const { errorMiddleware } = require('./middlewares/error.middleware');

app.use(cors());
app.use(express.json());
app.use(router);

app.use(errorMiddleware);

app.listen(process.env.PORT, () =>
  console.info(`App rodando na porta ${process.env.PORT}`),
);
