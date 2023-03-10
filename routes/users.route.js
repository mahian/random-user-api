
const express = require('express');
const router = express.Router();
const { getAllUsers, postUser, getUserFrom, getRandomUser, deleteUser } = require("../controllers/users.controller");

router.get('/user/all', getAllUsers);
router.get('/user/random', getRandomUser);
router.get('/userForm', getUserFrom );
router.post('/user/save', postUser);
// router.PATCH ('/user/update' );
router.delete ('/user/delete/:id', deleteUser );

module.exports = router;