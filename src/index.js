const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan.format('dev'));

const PORT = process.env.PORT || 7001;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
    console.log(`Server connected in ${NODE_ENV} mode on port ${PORT}`);
});

