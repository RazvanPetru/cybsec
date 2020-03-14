const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(3000);