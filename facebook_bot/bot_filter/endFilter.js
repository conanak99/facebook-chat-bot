"use strict";
var util = require("./../utilities");
var _ = require("underscore");
var BOT_REPLY_TYPE = require("./../constants").BOT_REPLY_TYPE;
var BUTTON_TYPE = require("./../constants").BUTTON_TYPE;
var PAYLOAD = require("./../constants").PAYLOAD;
var simsimiAPI = require("./../api/simsimiAPI");

// Response where all filter false
class EndFilter {

    process(input) {

    }
    setOutput(output) {

    }
    isMatch(input) {
        return true;
    }
    reply(input) {
        return simsimiAPI.getMessage(input).then(result => {
            return {
                output: result,
                type: BOT_REPLY_TYPE.TEXT
            };
        }, result => {
            return {
                output: "Xin lỗi bot còn nhỏ dại nên không hiểu. Bạn bấm \"Hướng dẫn\" hoặc gõ help xem?",
                buttons: [{
                    title: "Hướng dẫn",
                    type: BUTTON_TYPE.POSTBACK,
                    payload: PAYLOAD.HELP
                }],
                type: BOT_REPLY_TYPE.BUTTONS
            };
        });
    }
}


module.exports = EndFilter;