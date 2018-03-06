const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '524616919:AAEtVNxHwuOb4xv9ugGBXrvhY1du87Mg1Vs';
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
const C = {
    samsung: 'Samsung',
    honor: 'Honor',
    getbonus: 'Получение бонусов',
    usebonus: 'Использование бонусов',
    back: 'Назад',
    SamsungA8: 'Samsung A8',
    SamsungA8Plus: 'Samsung A8+',
    SamsungS8: 'Samsung S8',
    SamsungS8Plus: 'Samsung S8+',
    Note8: 'Note 8',
    Honor6a: 'Honor 6a',
    Honor6cPro: 'Honor 6c Pro',
    Honor9: 'Honor 9',
    Honor7x: 'Honor 7x',
    SamsungS9: 'Samsung S9',
    SamsungS9Plus: 'Samsung S9+'
}
// Matches "/echo [whatever]"
bot.onText(/\/start/, msg => {
    const text = `Приветствую, ${msg.from.first_name}\nЧто вы хотите сделать?`
    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard: [
                [C.getbonus,C.usebonus]
            ]
        }
    })
})

bot.on('message', msg => {
switch (msg.text) {
    case C.getbonus:
        sendProductList (msg.chat.id)
        break
    case C.usebonus:
        bot.sendMessage(msg.chat.id, `Потратить бонусы можно на:
        Освобождение от выброса мусора: 80
        1 час свободного времени: 25
        Выходной: 150
        Перекур без карт: 120
        Два обеда в день: 90
        Освобождение от зоны ответсвенности: 140`,{

            reply_markup: {
                keyboard: [
                    [C.getbonus,C.usebonus]
                ]
            }
        })
        break
    case C.back:
        bot.sendMessage(msg.chat.id, `Что вы хотите сделать?`,{
        reply_markup: {
            keyboard: [
                [C.getbonus,C.usebonus]
            ]
        }
    })
        break
    case C.samsung:
        sendSamsungList(msg.chat.id)
        break
    case C.honor:
        sendHonorList(msg.chat.id)
        break
    case C.SamsungS9Plus:
        bot.sendMessage(msg.chat.id, `35`)
        break
    case C.SamsungS9:
        bot.sendMessage(msg.chat.id, `30`)
        break
    case C.SamsungS8Plus:
        bot.sendMessage(msg.chat.id, `30`)
        break
    case C.SamsungS8:
        bot.sendMessage(msg.chat.id, `25`)
        break
    case C.SamsungA8Plus:
        bot.sendMessage(msg.chat.id, `20`)
        break
    case C.SamsungA8:
        bot.sendMessage(msg.chat.id, `15`)
        break
    case C.Note8:
        bot.sendMessage(msg.chat.id, `35`)
        break
    case C.Honor6a:
        bot.sendMessage(msg.chat.id, `4`)
        break
    case C.Honor6cPro:
        bot.sendMessage(msg.chat.id, `6`)
        break
    case C.Honor7x:
        bot.sendMessage(msg.chat.id, `10`)
        break
    case C.Honor9:
        bot.sendMessage(msg.chat.id, `15`)
        break
}
})

function sendProductList(chatid) {
    bot.sendMessage(chatid, `Выберите бренд продукта за который вы хотите получить бонус:`, {
        reply_markup: {
            keyboard: [
                [C.samsung, C.honor],
                [C.back]
            ]
        }
    })

}
function sendSamsungList(chatid) {
    bot.sendMessage(chatid, `Продукция Самсунг`,{
        reply_markup: {
            keyboard: [
                [C.SamsungA8,C.SamsungA8Plus,C.SamsungS8],
                [C.SamsungS8Plus,C.SamsungS9,C.SamsungS9Plus,C.Note8],
                [C.back]
            ]
        }
    })

}
function sendHonorList(chatid) {
    bot.sendMessage(chatid, `Продукция Honor`,{
        reply_markup: {
            keyboard: [
                [C.Honor6a,C.Honor6cPro,C.Honor7x,C.Honor9],
                [C.back]
            ]
        }
    })

}
