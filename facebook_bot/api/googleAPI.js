"use strict";
var request = require("request");
var atob = require("atob");
var _ = require("underscore");

class GoogleAPI {
    constructor() {
        this._token = process.env.YOUTUBE_TOKEN || atob("XXX");
        this._url = "https://www.googleapis.com/youtube/v3/search";

        this._translateUrl = "https://www.googleapis.com/language/translate/v2";
    }

    findVideos(query) {
        return new Promise((resolve, reject) => {
            request({
                url: this._url,
                qs: {
                    part: "snippet",
                    type: "video",
                    q: query,
                    key: this._token
                },
                method: "GET"
            }, (err, response, body) => {
                if (err) {
                    reject(err);
                    return;
                }

                var results = JSON.parse(body);
                // Get first 3 items
                var videos = _.first(results.items, 3).map(video => {
                    return {
                        title: video.snippet.title,
                        description: video.snippet.description,
                        link: `https://www.youtube.com/watch?v=${video.id.videoId}`,
                        thumb: video.snippet.thumbnails.high.url
                    };
                });
                resolve(videos);
            });
        });
    }

    translate(text) {
        return new Promise((resolve, reject) => {
            request({
                url: this._translateUrl,
                qs: {
                    target: "vi",
                    q: text,
                    key: this._token
                },
                json: true,
                method: "GET"
            }, (err, response, body) => {
                if (err) {
                    reject(err);
                    return;
                }

                var translated = body.data.translations[0].translatedText;
                resolve(translated);
            });
        });
    }
}

module.exports = new GoogleAPI();