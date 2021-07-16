"use strict";
var util = require("./../utilities");
var SimpleFilter = require("./simpleFilter");
var api = require("./../api/googleAPI");
var BOT_REPLY_TYPE = require("./../constants").BOT_REPLY_TYPE;

// Same as simple filter, but return text and buttons
class YoutubeFilter extends SimpleFilter {
    process(input) {
        var query = input;
        for(var text of this._inputText) query = query.replace(text, "");  // Remove the @nhac, @youtube, ... from input 
        this._query = query;
    }

    reply(input) {
        return api.findVideos(this._query).then((videos) => {
            return {
                output: videos,
                type: BOT_REPLY_TYPE.VIDEOS
            };
        });
    }
}


module.exports = YoutubeFilter;