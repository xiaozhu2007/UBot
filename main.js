const mineflayer = require("mineflayer")
const pathfinder = require("mineflayer-pathfinder").pathfinder
const delay = require("delay")
require('dotenv').config()

function start() {
    /**
     * @description 主程序
     */
    const bot = mineflayer.createBot({
        host: process.env.UB_HOST || "mc.example.com",
        port: process.env.UB_PORT || 25565,
        username: process.env.UB_USERNAME || "_Steve_",
        password: process.env.UB_PASSWORD || "",
        version: process.env.UB_VERSION || "1.20.4",
        auth: process.env.UB_AUTH || "",
        verbose: true,
    })

    bot.logABMsg = process.env.ENABLE_AB_MESSAGE || false;

    console.log(
        "Connecting to [%s:%s](%s)",
        process.env.UB_HOST,
        process.env.UB_PORT,
        bot.version
    )
    bot.loadPlugin(pathfinder)
    require("./src/bot-extension")(bot)

    bot.on("connect", () => {
        bot.log("[bot.connect] Login as user [" + (bot.username || process.env.UB_USERNAME) + "]")

        /** 加载模块 */

        /** @deprecated This will throw an error. */
        // require('./modules/module-action-move')(bot);

        /** @deprecated This will throw an error. */
        // require('./modules/module-action-follow')(bot);

        require("./modules/module-logger")(bot) // Better Logger

        require("./modules/module-chat-hi")(bot) // say Hello to other players

        require("./modules/module-chat-death")(bot) // Log when bot died

        require("./modules/module-chat-countdown")(bot) // Count Down

        require("./modules/module-auto-chat") // Auto Response

        require("./modules/module-update")(bot) // Nothing.

        require("./modules/module-help")(bot) // The main help menu

        require("./modules/module-login")(bot) // Auto Login
    })
    bot.on("error", (err) => console.log(err))
}

process.on("uncaughtException", (err) => {
    console.log("[process.uncaughtException] " + err)
    this.bot.log("[process.uncaughtException] Trying reconnection 30s later...")
    delay(30000).then(() => {
        start()
    })
})

try {
    start()
} catch (e) {
    console.error("[bot.error.global] Global Error : " + e)
}
