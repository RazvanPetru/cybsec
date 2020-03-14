const express = require('express');

const router = express.Router();

router.use('/admin', (req, res, next) => {
    res.send('<h1>Admin Page</h1>');
});


module.exports = router;