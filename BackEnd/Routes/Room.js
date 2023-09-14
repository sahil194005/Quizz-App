const express = require('express');
const router = express.Router();
const  AuthUser  = require('../Auth/AuthUser')
const { createRoom,getRooms,joinRoom ,showList} = require('../Controller/Room');

router.route('/create-room').post(AuthUser, createRoom);
router.route('/get-rooms').get(AuthUser, getRooms);
router.route('/join-room').post(AuthUser, joinRoom);
router.route('/result').get(AuthUser, showList);
module.exports = router;
