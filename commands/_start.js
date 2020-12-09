/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title: "✅ Check ", command: "Joined✅" }]
Bot.sendInlineKeyboard(
  button,
  "_📛You Must Be In Our Telegram Chats To Use Our Bot\n\n1 - Join Our _[Main Channel](https://t.me/Legit_Doubler_Invest)_\n2 - Join Our _[Payment Channel](https://t.me/legit_claim)_\n3 - Join Our _[Partner Channel](https://t.me/dubai_admin_offical)_\n4 - Join Our _[Advertiser Channel](t.me/LegitAirdrop_AndInvest)_\n\nClick “Check” button After Join All Above Channels_",{disable_web_page_preview: "true"}
)

let welco = User.getProperty("welco")
if (welco == undefined) {
  let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
  tota.add(1)

  User.setProperty("welco", user.telegramid, "text")
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
   var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(0.0)
  Bot.sendMessageToChatWithId(refUser.chatId, "🔮 You have a New Referral\n👥 User : "+"[" +user.telegramid+"]" + "(" + "tg://user?id=" + user.telegramid + ")"+"\n_Now You Will get bonus only if he joins our channel!!_"
   
)
}

function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)


