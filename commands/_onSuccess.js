/*CMD
  command: /onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.result.data
var amountsent = result.amount.amount.slice(1,500)
var email = result.to.email
Bot.sendInlineKeyboard([{title: "🔙 Back", command: "/start" }],"💸 *Payment Successfully Send. Check Your Coinbase.*\n\n*Amount :*"+amountsent+" *BTC*\n*Email :*"+email);

var tex = "✅ *New* *Withdrawal* *Send*\n🗣 *User* :"+"[" +user.first_name+"]" + "(" + "tg://user?id=" + user.telegramid + ")"+"\n🌐 *Coinbase* *Email*: _*****"+email.slice(5)+"_\n💵 *Amount* : " +amountsent+ " *BTC*\n🤖 *Bot* *Link*: *@" +bot.name+ "*\n\✅*Status*: *Paid*\n\n🎉Earn Unlimited BTC. Refer Your Friends🎉";
Api.sendMessage({chat_id:"@legit_claim",text:(""+tex+""),parse_mode:"markdown"})
