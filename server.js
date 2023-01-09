// check for prod/dev environment
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// define express
const express = require('express');
const app = express();

// define fs
const fs = require('fs');

// define cors
const cors = require('cors');
app.use(cors());

// define routes
const orders = require('./routes/orders');

// public path
const path = require('path');
const publicPath = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicPath);
app.use(staticMiddleware);

//define mongoose
const mongoose = require('mongoose');
// connect with the database
mongoose.connect('mongodb://localhost/labelorders', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

// define middleware
app.use(express.json()); //express.json() is a middleware
app.use('/api/orders', orders);

// PORT listening
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}...`));
