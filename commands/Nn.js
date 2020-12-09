/*CMD
  command: Nn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title : "⚜️ Joined ⚜️" , command : "/Joined" }]
Bot.sendInlineKeyboard(button , "*🛡For using this bot join our all telegram channel : \n\n➤ @DragonEarningPay\n➤@VerifiedAirdropSignals\n➤@CryptoCurrencyEarningLTD\n➤@SajalExchange\n➤@AirdropSignalsSupport\n\n☑️ Done Subscribed! Click Joined*")
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
 balance.add(2)
Bot.sendMessageToChatWithId(refUser.chatId, "*➕2 BTT* earned from new referral! *Refer more and earn Instantly BTT*");
}

function doAlreadyAttracted(){
  Bot.sendMessage("*You Already Started The Bot ❌*");
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var stat = Libs.ResourcesLib.anotherChatRes("stat", "global")
  stat.add(1)
  Bot.sendMessageToChatWithId(
    1462578839,
    "*New user*\nUser link = " +
      user_link +
      " \nUser id = " +
      user.telegramid +
      ""
  )
}
User.setProperty("welco", user.telegramid, "text")
