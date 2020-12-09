/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⬅️ return
CMD*/

var userstat = User.getProperty("status");
var referbonus = User.getProperty("referbonus");
if (userstat=="member" | userstat =="administrator" | userstat =="creator"){
if (referbonus == undefined){
let refUser = Libs.ReferralLib.currentUser.attractedByUser()
if (refUser){
  var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
var conRef = Libs.ResourcesLib.anotherUserRes("conRef", refUser.telegramid)
conRef.add(1)
  balanceref.add(0.0000001)
  Bot.sendMessageToChatWithId(refUser.chatId, "You Earned +0.0000001 BTC\n*New User :* "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")")
User.setProperty("referbonus", user.telegramid, "integer")}
}

var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("💰 Balance\n👫 Referral,🎁 Bonus,💲Withdraw,\n📊 Statistics,⚙️Set Email", "*▶️ Instant BTC Pay Bot*")
}
if (userstat=="left"){
Bot.runCommand("/start");
}
