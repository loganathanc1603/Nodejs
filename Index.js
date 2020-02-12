console.log("Hello Node Js");

const fs = require('fs');
const os = require('os');

const Note = require('./Notes.js');

var output = Note.addOperation(2, 4);

console.log(output);

var userInfo = os.userInfo();
//console.log(userInfo);


fs.appendFile("Message.txt", ` Hello ${userInfo.username}`, (err) => {
    if(err){
        throw err;
    }else{
        console.log("The data to append was appended to the file!.");
    }
});