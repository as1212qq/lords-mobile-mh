const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('جناح الثلج')
.setDescription('لهزيمه جناح الثلج يجب استخدام ابطال البراعه')
.setImage('https://b.top4top.io/p_1644qyv1b3.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0x90a08e)

let MessageEmbed = await message.channel.send(embed)
MessageEmbed.react('✅')
}

module.exports.config = {
name: "Frostwing",
description: "يظهر لك افضل الابطال لصيد جناح الثلج",
usage: "-Frostwing",
accessableby: "Members",
aliases: ["frostwing","جناح"]
}