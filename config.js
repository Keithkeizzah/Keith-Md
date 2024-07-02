//GIFTED-MD//

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kkeizzah@gmail.com";
global.location = "Migori,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Keithkeizzah/KEITH-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.devs = "254748387615";
global.sudo = process.env.SUDO || "254748387615";
global.owner = process.env.OWNER_NUMBER || "254748387615";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ad00848dda6847a67ffb0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254748387615";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254748387615";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0c1WEE3SWJiWVFaVXlHMTM0bHIzNldyTWcrOW1CaDdCNGxnSGZ6YU1HND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWhuSlhxMnhHN1dEZjlnZEoyWTU0bnoySFk3c3l5OUhPSFdHQzZRMVZHbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRk9iai9aV0pCdVFqeGJJVzV3TTUrYkZnc1JVeXI3cEZvZG9abldUdzJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzOUlWQkhBaXpFbi9EeUs4dE1SQWxHUXp5OG9IdnUybU0zdVV4ZHRuT0cwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQTXF6Z0dFZnVGNzhxV2NUUHZ6WTk3NWs5dmkzRERnT1pQQmNFMjlYRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJkMWt4bGdpRSthYkJWb1ozMEVBdFVjNk0vU0ZMU0thNVg0bW1WRG02SGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pUZXFSYXhQUGxNR3V2VXIyK055alQwbUNFdC8rVFNtMFl3ZXBnMThVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzZPREZBZzl1T2xEQkYxaTZGa2RqRXMwTWdCdGRHVHJqbGFWQm12cHNGOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9zYlFNUUtNSmxSS1cwbUFJT28rVjljQzhySDY1a0ZpR3JEUmQzNTlNc2plWWNXeloxamRsRVk0cS9MQVd6Z0ViNXZiMFpUMVI1VStDY2ZSQlVGMmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6Ikx1Um1rbzBtSnpRNW9ZVDAzczZzRENoMEJzZU5VbWxGYW9VbWlHU0NRZ009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkFuWUdkWDNaVGl5dzhjOXU1NEs3RGciLCJwaG9uZUlkIjoiNTA3NzFhY2MtMTFhZi00OTliLTkyYmEtMTUyYTdhOThjNThmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkrbWcxMkp4NkVKVVAySzlUbWFtbUxjTzdUTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNZklQRHU0N3RtdnViZ3JBTzFBOWRVZEFXWEk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1EyWFI1OVQiLCJtZSI6eyJpZCI6IjI1NDc1OTQzMzUzMToyNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1R1K29jR0VLYWZqYlFHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiREs4Yy9qZHphVE45N0x4R2FhODdDajVqYTRRSlhZMmIvRnhIWTdpN3VXRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL1E5YWtocGJZblkrai9NOFhadUQ5Q1ptRVAvV3IyMy94aG91amtxMWV4QTZ3T1VJZVVrQ1dDbGcvczlTWkNlRFExZnNWdisxRzljOXpMeXBoZUxDQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjJTcDdzY3lqTnY4RFEvTjYySUdvRGNvNC9YNVVlZHFkNjdsazY1T0V5V0N1QUNBZUFOeVNkclpLamZhbnB5ek9PTm0veWV0bTFmalhHY1A4dDVpSGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU5NDMzNTMxOjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlF5dkhQNDNjMmt6ZmV5OFJtbXZPd28rWTJ1RUNWMk5tL3hjUjJPNHU3bGgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk4ODE2NTEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHZ6In0="
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "𝐌𝐈𝐆𝐇𝐓𝐘 𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  author: process.env.PACK_AUTHER || "Keith Tech",
  packname: process.env.PACK_NAME || "Keith-Md♥️",
  botname: process.env.BOT_NAME || "𝐊𝐄𝐈𝐓𝐇-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐊𝐄𝐈𝐓𝐇𝐊𝐄𝐈𝐙𝐙𝐀𝐇",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KEITH").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
