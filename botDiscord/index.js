const Discord = require('discord.js');
const client = new Discord.Client();
const mysql = require('mysql')
const prefix = "!";
const fs = require('fs')

client.on('ready', () => {
  console.log(`Je suis prêt. ${client.user.tag}!`);
  client.user.setActivity(`MP Moi pour Whitelist`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('pong');
  }
});


let con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "jordan54210",
  database: "five-dev"
});

client.on('message', message => {
  if(message.guild) return;
              const args = message.content.slice(prefix.length).trim().split(/ +/g);
              const command = args.shift().toLowerCase();
              let object = args[0];
              let detail = args.slice(1).join(" ");
                      if(command === "whitelist"){
                          if(!object){
                            const err_code = new Discord.MessageEmbed()
                            .setColor('#F93A2F')
                            .setTitle('Error 400 - Bad Request')
                            .setDescription("Tu n\'a pas précisé ton steam hex. Exemple : !whitelist steam:110000116b8ee4c")
                            
                                  message.channel.send(err_code)
                           }else{
                                          try {
                                            const code = new Discord.MessageEmbed()
                                            .setColor('#8e44ad')
                                            .setTitle('Succès :')
                                            .setDescription(":white_check_mark: Votre requête a été envoyé au serveur !")
                                            message.channel.send(code);
                                            con.query(`SELECT * FROM whitelist`)
                                            con.query('INSERT INTO whitelist (identifier) VALUES (?);', [object]) 
                                            } catch (err) {
                                            console.log(err);
                                            }
                            }
                    }return
            })



client.login('NzY1NjM0MjM5MjE1MTczNjQz.X4Xqcw.F3KDMFprb3qDeNdR1QIxxqA3dbE')