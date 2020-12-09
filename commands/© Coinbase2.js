/*CMD
  command: © Coinbase2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
💳 *How much BTC you want to Withdraw:*

➡️ Send me the amount of BTC you want to Withdraw:
  ANSWER
  keyboard: ⬅️ Return
  aliases: 
CMD*/

var btc = Libs.ResourcesLib.userRes("balance");
var amount = parseFloat(message)
var email = User.getProperty("email");

if(amount<0.0000005){
  Bot.sendMessage("💳 Minimum Amount: *0.0000005* BTC")
}


if(amount>btc.value()){
  Bot.sendMessage("💳 Maximum Amount: *"+btc.value().toFixed(6)+" BTC*")
}else if(amount>0.0000005| amount == 0.0000005){
  btc.remove(amount)
Bot.setProperty("wid",(Bot.getProperty("wid","0")*1)+amount,"text")
Libs.Coinbase.apiCall({
  method: "POST",   
  path: "accounts/1d61b17b-ad56-5bd8-9903-3e584889778e/transactions/", // you find it in coinbase.com/accounts/111111
  body: { 
 "type": "send",
 "to": email,
 "amount": message,
 "currency": "BTC"
},
  onSuccess: "/onSuccess",
  onError: "/onApiError"  // onError command
  // background: true // perform api call in background for big timeout limit
  // apiKey - if you need custom Api Key
  // secretApiKey - if you need custom Api Key
})
}
