"use strict";
// Get image from xkcn.info
var request = require("request");
var atob = require("atob");

class GirlAPI {
    constructor() {
        this._tumblrKey = process.env.TUMBLR_TOKEN || atob("XXX");
        this._tumblrUrl = "https://api.tumblr.com/v2/blog/xkcn.info/posts/photo";

        this._fbToken = process.env.FB_TOKEN ||
            atob("XXX");
        this._pageId = "637434912950811"; // Xinh nhe nhang page
        this._fbUrl = `https://graph.facebook.com/v2.6/${this._pageId}/photos/`;
    }

    // Only get 1 image each time from xkcn.info
    getRandomGirlImage() {
        var max = 4500; // Get random image with index from 0 to 4500
        var randomIndex = Math.floor((Math.random() * max));

        return new Promise((resolve, reject) => {
            request({
                url: this._tumblrUrl,
                qs: {
                    api_key: this._tumblrKey,
                    limit: 1,
                    offset: randomIndex
                },
                method: "GET"
            }, (err, response, body) => {
                if (err) {
                    reject(err);
                    return;
                }

                var rs = JSON.parse(body);
                var imageUrl = rs.response.posts[0].photos[0].original_size.url;
                resolve(imageUrl);
            });
        });
    }

    getRandomSexyImage(pageId, maxIndex) {
        var randomIndex = Math.floor((Math.random() * maxIndex));

        return new Promise((resolve, reject) => {
            request({
                url: `https://graph.facebook.com/v2.6/${pageId}/photos/`,
                qs: {
                    type: "uploaded",
                    fields: "images",
                    limit: 1,
                    offset: randomIndex,
                    access_token: this._fbToken
                },
                method: "GET"
            }, (err, response, body) => {
                if (err) {
                    reject(err);
                    return;
                }

                var rs = JSON.parse(body);
                var imageUrl = rs.data[0].images[0].source;
                resolve(imageUrl);
            });
        });
    }
}

module.exports = new GirlAPI();