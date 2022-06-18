/**
* Thanks To
* Allah S.W.T
* Ortu
* Riyo XDZ
* Dhika Ardiant
* All Creator Bot
* All Subscriber Ku
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = { // API Prefix
	// nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
}
// Apikey Website Api
global.APIKeys = { // APIKey Here
	'// 'https://website': 'apikey'
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'APIKEY',
  'https://api.xteam.xyz': 'HIRO',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'nyyxz-bot',
  'https://api.lolhuman.xyz': '2d118bcd18c4e779748a84b',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'uN8rsK4g',
  'https://api.justaqul.xyz': '5kbUqdG00OXelFYx',
  'http://zekais-api.herokuapp.com': 'grqgD6pU',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
}

// Other
global.owner = ['6285822347348'] //GANTI NOMOR KALIAN
global.premium = ['6285822347348'] //GANTI NOMOR KALIAN
global.packname = 'Sticker By' //TERSERAH GANTI APA GAK
global.author = 'ArullOfc' //TERSERAH
global.sessionName = 'lolibot' //JANGAN DIGANTI KALO GAK MAU EROR
global.prefa = ['','!','.','🐦','🐤','🗿'] //JANGAN DI GANTI
global.sp = '⭔'
global.mess = {
    success: '*✓ Success*',
    admin: '*Fitur Khusus Admin Group Bang!*',
    botAdmin: '*Jadiin Admin Dulu Lah Bot Nya Tolol Kali Kau Bang*',
    eror: '*Yah Eror kak*',
    owner: '*Fitur Khusus ArullOfc*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Sabar Loading! Orang Sabar Disayang Janda...*',
    endLimit: '*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/apri.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
