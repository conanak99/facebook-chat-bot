"use strict";

var SimpleFilter = require("./simpleFilter");
var BOT_REPLY_TYPE = require("./../constants").BOT_REPLY_TYPE;

class ImageFilter extends SimpleFilter {
    constructor(inputText, imageFunction) {
        super(inputText, "");
        this._imageFunction = imageFunction;
    }

    reply(input) {
        return this._imageFunction().then(imgUrl => {
            return {
                output: imgUrl,
                type: BOT_REPLY_TYPE.IMAGE
            }
        });
    }

}

module.exports = ImageFilter;