const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "393459919082"
global.ownername = "0010110"//owner name
global.ytname = "Luvloner"
global.socialm = "instagram Luvloner0010110"
global.location = "Italian"

global.botname = '0010110' //name of the bot

//sticker details
global.stickername = '0010110'
global.packname = '0010110'
global.author = 'Maria Bot'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush botz inc."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaImo5ZG3R3qjKOdyr1I'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = true //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Maria Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/AYUSH-PANDEY023/Maria-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
