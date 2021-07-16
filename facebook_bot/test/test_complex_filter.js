"use strict";

var bot = require("./../bot");
var async = require("asyncawait/async");
var await = require("asyncawait/await");

/*
async(() =>{
    let result = await([
        bot.chat("@music sơn tùng"),
        bot.chat("@nhạc trịnh công sơn"),
        bot.chat("@yt miu lê")
        ]);
    console.log("youtube");
    console.log(JSON.stringify(result));   
})();
*/


async(() =>{
    let result = await([
        bot.chat("@jav"),
        bot.chat("jav idol"),
        bot.chat("jap")
        ]);
    console.log("Jav");
    console.log(result);   
})();

/*
async(() =>{
    let result = await([
        bot.chat("@sexy"),
        bot.chat("@fap"),
        bot.chat("gai sexy")
        ]);
    console.log("sexy");
    console.log(result);   
})();


async(() =>{
    let result = await([
        bot.chat("@gái"),
        bot.chat("@gai"),
        bot.chat("@girl"),
        bot.chat("cho mấy tấm hình gái")
        ]);
        console.log("girl");
    console.log(result);   
})();
*/

/*
async(() =>{
    let result = await([
        bot.chat("Help me with javascript please"),
        bot.chat("Help me with [javascript] please"),
        bot.chat("Help me with {coding} please")
        ]);
    console.log(result);   
})();

async(() =>{
    let result = await([
        bot.chat("blah blah"),
        bot.chat("số đo 3 vòng của em là gì"),
        bot.chat("anh iu em")
    ]);
    console.log(result);   
})();
*/