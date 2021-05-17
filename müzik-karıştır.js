const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const Dogru = "#22BF41";
const Hata = "#f30707";
const db = require("quick.db");
const akardiyan = require("../ayarlar.json");

module.exports.run = async (client, message) => {

  const embedd = new Discord.MessageEmbed()
.setColor(Dogru)
.setTitle("Karıştır")
.setDescription(`Müzik Kuyruğu, ${message.author} tarafından karıştırıldı.`) 
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());    
  
  	let p = db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(Hata) 
.setTitle("• Hata: 009 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`Müzik kuyruğunu karıştırabilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(Hata) 
.setTitle("• Hata: 001 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//  
client.player.shuffle(message.guild.id);
return message.channel.send(embedd) 
};

module.exports.config = {
    name: "karıştır",
    aliases: []
};
