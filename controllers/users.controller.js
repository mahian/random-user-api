const users = require('../randomUsers.json');
const fs = require('fs');
const path = require('path');

exports.getAllUsers = (req, res) => {
    res.json(users);
}
exports.getUserFrom = (req, res) => {
    res.sendFile(path.join(__dirname + '/../view/userForm.html'))
}
exports.postUser = (req, res) => {
    // const userData = JSON.parse(fs.readFileSync(users));
    const name = req.body.name;
    res.send(name);
    console.log(req.body);
}
exports.getRandomUser = (req, res) => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    res.json(randomUser);
}
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex(user => user._id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        fs.writeFileSync('../randomUsers.json', JSON.stringify(users));
        res.send(`User with email ${id} has been deleted.`);
    } else {
        res.status(404).send(`User with email ${id} not found.`);
    }
}