const express = require('express');
const authMiddleware = require('../middlewares/Auth')


const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({
        OK: true,
        user: req.userId
    });
});

module.exports = app => app.use('/project', router);