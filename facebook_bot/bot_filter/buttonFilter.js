"use strict";
var util = require("./../utilities");
var _ = require("underscore");
var SimpleFilter = require("./simpleFilter");
var BOT_REPLY_TYPE = require("./../constants").BOT_REPLY_TYPE;

// Same as simple filter, but return text and buttons
class ButtonFilter extends SimpleFilter {
    constructor(inputText, output, buttons) {
        super(inputText, output);
        this._buttons = buttons;
    }

    reply(input) {
        return new Promise((resolve, reject) => resolve({
            output: this._output,
            buttons: this._buttons,
            type: BOT_REPLY_TYPE.BUTTONS
        }));
    }
}


module.exports = ButtonFilter;