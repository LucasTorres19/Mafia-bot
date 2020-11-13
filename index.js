const  Discord = require("discord.js")
const  config = require("./config.json")
const   ytdl = require("ytdl-core")

const client = new Discord.Client()
const prefix ="--"

let strariux = 0

client.login(config.BOT_TOKEN)

client.on("message",function(message){

    if(message.author.bot){return};

    numero_ramdom = Math.random() * 100

    if(message.member.user.discriminator == 4190 && numero_ramdom > 50){
        message.react("🧙‍♂️");

    }else if(message.member.user.discriminator == 1891 || message.member.user.discriminator == 6888 && numero_ramdom > 50){
    
        message.react("🅿️");
        message.react("🇺");
        message.react("🇹")
        message.react("🅾")
    
    }

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

         if(comando === "--oscar"){
            
            const msg_embed = new Discord.MessageEmbed()
            .setColor('ffffff')
            .setTitle('Oscar')
            .setDescription('Hola soy oscar ☺☺.')
            .setThumbnail('https://wamiz.es/uploads/article/images/wysiwyg/2016/12/gatos-con-sombreros-hechos-de-11s.jpg')
            .addFields(
                {name:'Shoko me la pelas 😏😏😏',value:'Thiago la putita del mafia 🙂🙂🙂🙂'},
                { name: '\u200B', value: '\u200B' }
            )
            .setFooter('tomi es re puto 😣😣😣.');
            message.channel.send(msg_embed)
         }

})

