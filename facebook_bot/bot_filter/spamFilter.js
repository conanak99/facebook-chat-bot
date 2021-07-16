"use strict";
var util = require("./../utilities");
var _ = require("underscore");
var BOT_REPLY_TYPE = require("./../constants").BOT_REPLY_TYPE;

class SpamFilter {
    process(input) {}

    isMatch(input) {
        return input == null || input.trim().length < 2;
    }
    reply(input) {
        return new Promise((resolve, reject) => resolve({
            output: "Server yếu lắm, đừng spam tội bot",
            type: BOT_REPLY_TYPE.TEXT
        }));
    }

}


module.exports = SpamFilter;