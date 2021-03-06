const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const positionRoutes = require('./routes/position');
const orderRoutes = require('./routes/order');
const keys = require('./config/keys');


const app = express();

mongoose.connect(keys.MONGO_URI).then(() => {
    console.log('MongoDB connected.');
}).catch(error => {
    console.log(error);
});

app.use(require('morgan')('dev'));
app.use(require('cors')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/order', orderRoutes);


module.exports = app;
