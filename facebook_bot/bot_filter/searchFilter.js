"use strict";
var util = require("./../utilities");
var _ = require("underscore");
var api = require("./../api/wordpressAPI");
var BOT_REPLY_TYPE = require("./../constants").BOT_REPLY_TYPE;

class SearchFilter {
    process(input) {
        var query = /\[(.*)\]/.exec(input)[1];

        var inp = util.charToNumber(util.removeUnicode(input));

        var numberMatch = inp.match(/\d/g);
        var number = 3; //Default la 3 bai
        if (numberMatch !== null) {
            number = parseInt(inp.match(/\d/g)[0]);
        }

        this.number = number;
        this.query = query;
    }
    isMatch(input) {
        var match = /\[(.*)\]/.exec(input);
        return match !== null;
    }
    reply(input) {
        return api.searchPost(this.number, this.query)
            .then(result => {
                return {
                    output: result,
                    type: BOT_REPLY_TYPE.POST
                };
            });
    }
}


module.exports = SearchFilter;