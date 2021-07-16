"use strict";
var util = require("./../utilities");
var request = require("request");
var _ = require("underscore");

class WordpressAPI {
    constructor() {
        this.apiUrl = "https://public-api.wordpress.com/rest/v1.1/sites";
        this.site = "toidicodedao.com";
    }

    searchPost(numberOfPost, searchQuery, callback) {
        return new Promise((resolve, reject) => {
            this._search(true, numberOfPost, searchQuery, result => {
                if (result.length > 0) resolve(result);
                else {
                    // If found no result, remove "" from query and continue to search
                    this._search(false, numberOfPost, searchQuery, resolve);
                }
            });
        });

    }

    _search(isSearchExactly, numberOfPost, searchQuery, callback) {
        var url = `${this.apiUrl}/${this.site}/posts/?number=10&fields=title,URL,featured_image&search=${encodeURI(searchQuery)}`;
        if (isSearchExactly) {
            url = `${this.apiUrl}/${this.site}/posts/?number=10&fields=title,URL,featured_image&search="${encodeURI(searchQuery)}"`;
        }
        url = url.replace("#", "%23"); //Fix a bug with # character

        request({
            url: url,
            method: "GET"
        }, (err, response, body) => {
            var found = JSON.parse(body);
            var posts = found.posts;
            var result = posts.splice(0, numberOfPost);
            result.map(rs => rs.title = util.decodeAndTruncate(rs.title));
            callback(result);
        });
    }

    searchCategory(numberOfPost, category, callback) {
        var url = `${this.apiUrl}/${this.site}/posts/?category=${encodeURI(category)}&number=30&fields=title,URL,featured_image`;

        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: "GET"
            }, (err, response, body) => {
                var found = JSON.parse(body);
                var posts = found.posts;
                var result = _.sample(posts, numberOfPost);
                result.map(rs => rs.title = util.decodeAndTruncate(rs.title));
                resolve(result);
            });
        });

    }

    searchByTag(numberOfPost, tag, callback) {
        var url = `${this.apiUrl}/${this.site}/posts/?tag=${tag}&number=30&fields=title,URL,featured_image`;

        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: "GET"
            }, (err, response, body) => {
                var found = JSON.parse(body);
                var posts = found.posts;
                var result = _.sample(posts, numberOfPost);
                result.map(rs => rs.title = util.decodeAndTruncate(rs.title));
                resolve(result);
            });
        });

    }
}

module.exports = new WordpressAPI();