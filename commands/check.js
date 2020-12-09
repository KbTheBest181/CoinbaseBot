/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status;
User.setProperty("status" , user, "string");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.runCommand("Joined2")
User.addToGroup("user")
}

if (user=="left"){
Bot.sendMessage("Must Join All Channels!")
var button = [{ title: "✅ Check ", command: "Joined✅" }]
Bot.sendInlineKeyboard(
  button,
  "_📛You Must Be In Our Telegram Chats To Use Our Bot\n\n1 - Join Our _[Main Channel](https://t.me/Legit_Doubler_Invest)_\n2 - Join Our _[Payment Channel](https://t.me/legit_claim)_\n3 - Join Our _[Partner Channel](https://t.me/dubai_admin_offical)_\n4 - Join Our _[Advertiser Channel](t.me/LegitAirdrop_AndInvest)_\n\nClick “Check” button After Join All Above Channels_",{disable_web_page_preview: "true"}
)

}
