"use strict";
var util = require("./../utilities");
var _ = require("underscore");
var BOT_REPLY_TYPE = require("./../constants").BOT_REPLY_TYPE;

class SimpleFilter {
    constructor(inputText, output) {
        this._inputText = inputText;
        this._output = output;
    }
    process(input) {}
    setOutput(output) {
        this._output = output;
    }
    isMatch(input) {
        input = util.removeUnicode(input);
        return _.some(this._inputText, function(t) {
            // For hi, dm, vl, only match if input is 2 characters
            if ((t.length == 2) && input.length > 2) return false;
            
            return input.indexOf(util.removeUnicode(t)) > -1;
        });
    }
    reply(input) {
        return new Promise((resolve, reject) => resolve({
            output: this._output,
            type: BOT_REPLY_TYPE.TEXT
        }));
    }

}


module.exports = SimpleFilter;