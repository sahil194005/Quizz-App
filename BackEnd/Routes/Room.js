const express = require('express');
const router = express.Router();
const  AuthUser  = require('../Auth/AuthUser')
const { createRoom,getRooms } = require('../Controller/Room');

router.route('/create-room').post(AuthUser, createRoom);
router.route('/get-rooms').get(AuthUser, getRooms);
module.exports = router;