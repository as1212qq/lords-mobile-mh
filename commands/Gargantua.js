const Discord = require("discord.js")
const botconfig = require("../botsettings.json")
const attachment = require("discord.js");
module.exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('العملاق الاعور')
.setDescription('To Defete Gargantua You Can Use Magic Heros')
.setImage('https://j.top4top.io/p_16610dv8j1.png')
.setFooter(`Requsted by ${message.author.username}`)
.setColor(0xff8400)

    message.channel.send(embed);

}

module.exports.config = {
name: "Gargantua",
description: "say Gargantua",
usage: "?Gargantua",
accessableby: "Members",
aliases: ["gargantua","العملاق"]
}