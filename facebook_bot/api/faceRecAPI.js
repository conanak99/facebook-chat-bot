"use strict";
// Get image from xkcn.info
var request = require("request");
var _ = require("underscore");
var atob = require("atob");
var googleAPI = require("./googleAPI");

class FaceRecAPI {
    constructor() {
        this._faceKey = process.env.MS_FACE_TOKEN || atob("XXX");
        this._faceApiUrl = "https://api.projectoxford.ai/emotion/v1.0/recognize";

        this._analyzeKey = "XXX";
        this._analyzeApiUrl = "https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=ImageType,Description";

    }


    analyzeEmo(imageUrl) {
        return new Promise((resolve, reject) => {
            request({
                url: this._faceApiUrl,
                headers: {
                    "Ocp-Apim-Subscription-Key": this._faceKey
                },
                method: "POST",
                json: true,
                body: {
                    "url": imageUrl
                }
            }, (err, response, body) => {
                if (err) {
                    reject(err);
                    return;
                }

                if (response.statusCode == 403 || response.statusCode == 429) {
                    resolve("Hết băng thông rồi, 1 phút nữa quay lại test nhé :'(");
                    return;
                }

                if (response.statusCode != 200) {
                    reject("");
                    return;
                }

                if (body.length == 0 || typeof body[0] === "undefined") {
                    reject("Hình mờ ảo quá, chẳng thấy mặt đâu");
                    return;
                } else {
                    var faceEmos = _.pairs(body[0].scores);
                    var mainEmo = _.max(faceEmos, emo => emo[1])[0];

                    var emoReply = {
                        "anger": "Bình tĩnh bình tĩnh. Thằng nào chọc giận anh thế...",
                        "fear": "Mói xem phim mà xong à, nhìn mặt sợ vãi hà",
                        "happiness": "Có gì vui mà nhìn mặt phởn phơ thế, kể nghe với",
                        "neutral": "Mặt lạnh như tiền vô cảm xúc.",
                        "contempt": "Nhìn mặt có vẻ cay cú vkl",
                        "disgust": "Nhìn cái mặt là biết số nhọ rồi, tội...",
                        "sadness": "Có gì buồn vậy, tập sự em nghe nào...",
                        "surprise": "Ngạc nhiên sửng sốt, không thốt nên lời"
                    };
                    resolve(emoReply[mainEmo]);
                }
            });
        });
    }

    analyzeImage(imageUrl) {
        return new Promise((resolve, reject) => {
            request({
                url: this._analyzeApiUrl,
                headers: {
                    "Ocp-Apim-Subscription-Key": this._analyzeKey
                },
                method: "POST",
                json: true,
                body: {
                    "url": imageUrl
                }
            }, (err, response, body) => {
                if (err) {
                    reject(err);
                    return;
                }

                if (response.statusCode != 200) {
                    reject("");
                    return;
                }

                /*
                    Non-clipart = 0,
                    ambiguous = 1,
                    normal-clipart = 2,
                    good-clipart = 3.
                */
                var clipArtType = body.imageType.clipArtType;
                if (clipArtType != 0) {
                    resolve("Mình chỉ nhận dạng được ảnh chụp thui nhé. Hình vẽ, emo hay logo thì chịu :'(");
                    return;
                } else {
                    var reply = body.description.captions[0].text;
                    resolve(reply);
                }
            });
        }).then(googleAPI.translate.bind(googleAPI));
    }
}

module.exports = new FaceRecAPI();