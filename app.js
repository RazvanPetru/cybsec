const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

const adminRoutes = require('./routes/admin');
const loginRoutes = require('./routes/login');

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(adminRoutes);
app.use(loginRoutes);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(PORT);