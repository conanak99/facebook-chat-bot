"use strict";
var request = require("request");
var atob = require("atob");

class SimsimiAPI {
    constructor() {
        this._key = process.env.SIM_TOKEN || atob("XXX");
        this._url = `http://api.simsimi.com/request.p?key=${this._key}&lc=vn&text=`;

        this._freeUrl = "http://newapp.simsimi.com/v1/simsimi/talkset?uid=10034&av=6.7.1&lc=vn&cc=vn&tz=Vietnam&os=a&isFilter=0&message_sentence=";
    }

    getMessage(text) {
        // Hot fix, remove this later
        // return Promise.resolve("Hôm nay bot mệt, nghỉ tạm. Hôm khác nói chuyện nhé.");

        return new Promise((resolve, reject) => {
            request({
                url: this._url + encodeURI(text),
                method: "GET"
            }, (err, response, body) => {
                if (err) {
                    reject();
                    return;
                }

                var rs = JSON.parse(body);
                if (rs.result === 100) {
                    resolve(rs.response);
                } else if (rs.result === 509) {
                    resolve("Các bạn chat nhiều quá API hết 100 limit cmnr. Mai bạn quay lại nhé :'(. ");
                } else {
                    reject();
                }
            });
        });
    }

    // Got by decompiling SimSimi APK. Not reliable but free
    getMessageFree(text) {
        return new Promise((resolve, reject) => {
            request({
                url: this._freeUrl + encodeURI(text),
                method: "GET"
            }, (err, response, body) => {
                if (err) {
                    reject();
                    return;
                }


                var rs = JSON.parse(body);
                var reply = rs.simsimi_talk_set.answers[0].sentence;
                resolve(reply);
            });
        });
    }

}

module.exports = new SimsimiAPI();