const accountSid = "";
const authToken = "";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+15054316008",
    to: "+923122327979",
  })
  .then((message) => console.log(message.sid));
