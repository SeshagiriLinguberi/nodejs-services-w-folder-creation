const express = require('express');
const router = express.Router();

const controller = require('../../Controllers/user.controller');

router.get('/get/all/users',controller.getAllUsers);

router.post('/get/user/by/id',controller.getUserById);

router.post('/update/user/by/id',controller.updateUserById);

router.post('/add/user/by/id',controller.addUserById);

router.post('/delete/user/by/id',controller.deleteUserById);

module.exports=router;