"use strict";
var util = require("./../utilities");
var _ = require("underscore");
var api = require("./../api/wordpressAPI");
var BOT_REPLY_TYPE = require("./../constants").BOT_REPLY_TYPE;
var tags = require("./../constants").PAGE_TAGS;

class TagFilter {
    process(input) {
        input = util.removeUnicode(input);
        var inp = util.charToNumber(input);
        var numberMatch = inp.match(/\d/g);
        var number = 3; //Default la 3 bai
        if (numberMatch !== null) {
            number = parseInt(inp.match(/\d/g)[0]);
        }

        this.number = number;
        for (var tag of tags) {
            if (input.indexOf(util.removeUnicode(tag.name)) > -1) {
                this.tag = tag.slug;
                return;
            }
        }
    }
    isMatch(input) {
        input = util.removeUnicode(input);
        return _.some(tags, function(tag) {
            return input.indexOf(util.removeUnicode(tag.name)) > -1;
        });
    }
    reply(input) {
        return api.searchByTag(this.number, this.tag)
            .then(result => {
                return {
                    output: result,
                    type: BOT_REPLY_TYPE.POST
                };
            });
    }
}


module.exports = TagFilter;