// prismarine-chat
module.exports = function (bot) {
    bot.on("whisper", (username, message) => {
        bot.log("[whisper] <" + username + ">: " + message)
    })

    bot.on("chat", (username, _message, _translate, jsonMsg) => {
        if (username == "Server") {
            bot.log(jsonMsg.toAnsi())
        } else {
            bot.log("<" + username + ">: " + jsonMsg.toAnsi())
        }
    })

    bot.on("actionBar", (message) => {
        if (bot.logABMsg) {
            bot.log("[actionBar] " + message.toAnsi())
        }
    })

    bot.on("kicked", (reason) => {
        bot.log("[bot.kicked] reason: " + reason.toAnsi())
    })
}
