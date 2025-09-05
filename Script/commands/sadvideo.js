module.exports.config = {
name: "sad",
version: "1.0.0",
hasPermssion: 2,
credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
description: "sad video",
commandCategory: "admin",
usages: "sad vedio",
cooldowns: 5,
dependencies: {
request: '',
"fs-extra": '',
axios: ''
}
};

module.exports.run = async function({ api, event }) {
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var videoLinks = [
"https://drive.google.com/uc?export=download&id=1RqzvOBFsG7LjJ8O_k2rcswHwlve-gvYP",
"https://drive.google.com/uc?export=download&id=1qCMv4ddmLg5y-o6gzqE0sfhIggWftIN3",
"https://drive.google.com/uc?export=download&id=1xU6DRyMF_FVG6psX-6FtDLMUPtONH5LB",
"https://drive.google.com/uc?export=download&id=1HonSw_oltW4qFhC6zT_o3zUcXB96m9hv",
"https://drive.google.com/uc?export=download&id=17anLTYTKFTybxP5Dyt9PzloYavbbXGQ8",
"https://drive.google.com/uc?export=download&id=1KUeRbrxS-tglF_Z3nyerLycLlxTiG3Rz",
" ",
"",
" ",
" ",
" ",
" ",
" ",
" ",
" ",
" ",
" ",
" ",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"https://drive.google.com/uc?export=download&id=1WLqcIdCmfU196lROXYmbxSKVdPHakIcB",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
" ",
" ",
" ",
" ",
" ",
"",
"",
" ",
" ",
" ",
" ",
" ",
" ",
" ",
" "
];


const path = __dirname + "/cache/hotvideo.mp4";
const randomLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];

request(encodeURI(randomLink))
.pipe(fs.createWriteStream(path))
.on("close", () => {
api.sendMessage({
body: "one said love যদি best হয়,"🙂🐰❤️‍🩹
তবে আমি তোমায় না দেখেই ভালো বাসি-,,❤️‍🩹😅",
attachment: fs.createReadStream(path)
}, event.threadID, () => fs.unlinkSync(path));
});
};

