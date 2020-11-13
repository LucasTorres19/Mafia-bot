const  Discord = require("discord.js")
const  config = require("./config.json")
const   ytdl = require("ytdl-core")

const client = new Discord.Client()
const prefix ="--"

let strariux = 0

client.login(config.BOT_TOKEN)

client.on("message",function(message){

    if(message.author.bot){return};

    if(!message.content.startsWith(prefix)){return}

    let cuerpocomando = message.content.split(prefix.length);
    let argumentos = cuerpocomando.splice(' ');
    let comando = argumentos.shift().toLowerCase();

    //Comandos.
    if(comando === '--ping'){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong!,${timeTaken}ms.`)
    }

    if(comando === '--strariux'){
        strariux++;
        if(strariux === 1){
        message.reply(`Strariux se comio ${strariux} pija tremenda 😏.`)
        }
        else{
        message.reply(`Strariux se comio ${strariux} pijas 😏.`)
        }
    }

    if(comando ==='--tl'){
         let canal = message.member.voice.channel;
            
        if(!canal){   
            message.channel.send('Papi , no me puedo unir si no estas en un canal 🙄.')
            console.log(canal)
        }else if(message.guild.voiceConnection){
        
            message.channel.send(`ya estoy en ${canal}, no rompas las bolas 😡.`)
         
        } else{
            
                canal.join().then(connection => {
                    
                    const streamOptions = { seek: 0, volume: 1 };
                    const url = ytdl('https://www.youtube.com/watch?v=R0lqowYD_Tg',{filter:'audioonly'})
                    const dispatcher = connection.play(url,streamOptions)
                   
                    dispatcher.on("end", end => {
                        console.log("left channel");
                        voiceChannel.leave();})
                    
                }).catch(console.error);
                
                
         }
         
         
         }


})

