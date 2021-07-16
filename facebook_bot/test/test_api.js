"use strict";

var wpAPI = require("./../api/wordpressAPI");
var girlAPI = require("./../api/girlAPI");
var simsimiAPI = require("./../api/simsimiAPI");
var googleAPI = require("./../api/googleAPI");
var faceRecAPI = require("./../api/faceRecAPI");
var btoa = require("btoa");

var async = require("asyncawait/async");
var await = require("asyncawait/await");

// rhc env set <Variable>=<Value> <Variable2>=<Value2> -a fbchatbox
// rhc env list -a fbchatbox  

/*
async(() =>{
    let results = await([
        faceRecAPI.analyzeImage("https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/12985368_1051808628222443_8663602569549609913_n.jpg?oh=f60344027f7bf89e2319c33f3b38a131&oe=57F73973")   ]);
    console.log(results);
})();


async(() =>{
    let results = await([
        faceRecAPI.analyzeEmo("https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/12985368_1051808628222443_8663602569549609913_n.jpg?oh=f60344027f7bf89e2319c33f3b38a131&oe=57F73973"),
        faceRecAPI.analyzeEmo("https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/11896111_894350157302322_7536939130403438858_n.jpg?oh=1c582314e24c06d38b8697d6a4b61fe0&oe=57F989E0"),
        faceRecAPI.analyzeEmo("https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/13255988_10204631022895720_248165748981936486_n.jpg?oh=7ac32219e03ade5c2f2d29f9fd856598&oe=5830181C"),
    ]);
    console.log(results);
})();
*/

/*
async(() =>{
    let results = await([
        googleAPI.translate("hello"),
        googleAPI.translate("dog"),
        googleAPI.translate("lovely dog"),
    ]);
    console.log(results);
})();

async(() =>{

    let results = await([
        googleAPI.findVideos("sơn tùng"),
        googleAPI.findVideos("hkt"),
        googleAPI.findVideos("trịnh công sơn"),
    ]);
    console.log(results);
})();
*/


/*
async(() =>{
    let results = await([
        girlAPI.getRandomSexyImage(),
        girlAPI.getRandomSexyImage(),
        girlAPI.getRandomSexyImage(),
    ]);
    console.log(results);
})();
*/

/*
async(() =>{
    let results = await([
        girlAPI.getRandomGirlImage(),
        girlAPI.getRandomGirlImage(),
        girlAPI.getRandomGirlImage(),
    ]);
    console.log(results);
})();

async(() =>{
    let results = await([
        wpAPI.searchByTag(5, "javascript"),
        wpAPI.searchPost(5, "review sách"),
        wpAPI.searchCategory(5, "chuyện-nghề-nghiệp")
        ]);
    console.log(results);
})();


*/

async(() =>{
    let results = await([
        simsimiAPI.getMessage("anh iu em"),
        simsimiAPI.getMessage("anh nhớ em"),
        simsimiAPI.getMessage("em ăn gì chưa?"),
    ]);
    console.log(results);
})();