module.exports.config = {
 name: "bday",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "ULLASH and SAHU ",
 description: "See admin's birthday",
 usePrefix: false,
 commandCategory: "bday",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const axios = global.nodemodule["axios"];
 const fs = global.nodemodule["fs-extra"];
 const path = __dirname + "/cache/1.png";

 const targetDate = new Date("MAY 05, 2026 00:00:00");
 const now = new Date();

 const diffMs = targetDate - now;
 const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
 const diffHours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
 const diffMinutes = Math.floor((diffMs / (1000 * 60)) % 60);
 const diffSeconds = Math.floor((diffMs / 1000) % 60);

 if (diffDays === 1) {
 const tomorrowMessage =
`👉Admin NAJMUL এর জন্মদিন আগামীকাল!\n অবশেষে এডমিনের জন্মদিন ফাঁস হয়ে গেল!\n\n উইশ করতে ভুলবে না কিন্তু...🥰😘
`;
 return api.sendMessage(tomorrowMessage, event.threadID, event.messageID);
 }

 if (diffDays === 0) {
 const happyBirthdayMessage = 
`╔═══ 🎉 𝐇𝐀𝐏𝐏𝐘 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 🎉 ════╗
║ 𝐎𝐔𝐑 𝐁𝐎𝐒𝐒 - |ᴺᴬᴶᴹᵁᴸ 💖 
╟─────────────────
║ 🎂 Everyone Please Wish Him Today! 
║ 🥳 আজ আমাদের Boss এর জন্মদিন! 
║ ❤️ মন থেকে উইশ করো সবাই! 
╟─────────────────
║ 📩 Connect With Him: 
║ ➤ 📘 Facebook : 
║ www.facebook.com/100065264163407
║ ➤ 💬 Messenger : 
║ m.me/100065264163407
║ ➤ 📱 WhatsApp : 
║ https://wa.me/+919339277338
╟─────────────────
║ 🫶 উইশ করো, দোয়া করো?
║ এবং ভালোবাসা জানাও প্রিয় বস  নাজমুল কে! ❤️‍🩹 
╚═════════════════════════╝`;
 return api.sendMessage(happyBirthdayMessage, event.threadID, event.messageID);
 }

 if (diffDays < 0) {
 const leakMessage =
`╔═══════════════════╗
║ 🎂 Admin NAJMUL HASAN 
║ এর জন্মদিন ফাঁস হয়ে গেছে ❤️‍🩹🤌
╚═══════════════════╝`;
 return api.sendMessage(leakMessage, event.threadID, event.messageID);
 }

 const countdownMessage = 
`╔═══════════════════╗
║ 🎂 Admin NAJMUL HASAN
║ এর জন্মদিন ফাঁস হয়ে গেছে ❤️‍🩹🤌
║═══════════════════
║ 📅 Days : ${diffDays}
║ ⏰ Hours : ${diffHours}
║ 🕰️ Minutes : ${diffMinutes}
║ ⏳ Seconds : ${diffSeconds}
╚════════════════════╝`;

 const url = `https://graph.facebook.com/100065264163407/picture?height=720&width=720`;

 try {
 const response = await axios({
 url,
 method: "GET",
 responseType: "stream",
 });

 const writer = fs.createWriteStream(path);
 response.data.pipe(writer);

 writer.on("finish", () => {
 api.sendMessage(
 {
 body: countdownMessage,
 attachment: fs.createReadStream(path),
 },
 event.threadID,
 () => fs.unlinkSync(path)
 );
 });

 writer.on("error", () => {
 api.sendMessage("❌ Image download failed.", event.threadID, event.messageID);
 });
 } catch {
 api.sendMessage("❌ Error occurred while getting image.", event.threadID, event.messageID);
 }
};
