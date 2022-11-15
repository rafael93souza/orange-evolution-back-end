require('express-async-errors');
require('dotenv').config({});
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerDocument.json');
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers/router');
const { errorMiddleware } = require('./middlewares/error.middleware');

const PORT = process.env.PORT || 3333;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(express.json());
app.use(router);

app.use(errorMiddleware);

app.listen(PORT, () => console.info(`App rodando na porta ${PORT}`));
