const  Discord = require("discord.js")
const  ytdl = require("ytdl-core")
const client = new Discord.Client()
const prefix ="--"
let userdelete;
let strariux = 0

client.login(process.env.BOT_TOKEN)

client.on("message",function(message){
    //delete
    if(message.author.id == userdelete){
      message.delete()
      return;
    }
    
    if(message.author.bot){return};
    // apoyo
    
    
    if (message.content.toLowerCase().includes("estoy triste")){
      message.channel.send(`Ánimos ${message.author}`)
    }else if(message.content.toLowerCase().includes("puta")){
      message.channel.send("Como tu hermana.")
    }else if(message.content.toLowerCase().includes("juegan") || message.content.toLowerCase().includes("jugas") || message.content.toLowerCase().includes("jugamos")){
      message.channel.send("con tu hermana juego.")
    }  
    
    //reacionando con emojis a ciertos id.

    let numero_ramdom = Math.random()

    if(message.member.user.discriminator == 4190 && numero_ramdom > 0.5){
        message.react("🧙‍♂️");

    }else if((message.member.user.discriminator == 1891 || message.member.user.discriminator == 6888) && Math.random() > 0.5){
    
        message.react("🅿️");
        message.react("🇺");
        message.react("🇹");
        message.react("🅾");
    
    }

    if(!message.content.startsWith(prefix)){return}
    

    let cuerpocomando = message.content.split(prefix.length);
    let argumentos = cuerpocomando.splice(' ');
    let comando = argumentos.shift().toLowerCase();
    //Comandos.
    //borrar msgs
    if (comando.startsWith('--dl')){
        userdelete = message.mentions.users.first().id
        message.delete()
        return;
    }
    //ping.
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
      return;
    }

    //Entra al canal y te dice troleado puto.

    if(comando ==='--tl'){
         let canal = message.member.voice.channel;
            
        if(!canal){   
            message.channel.send('Papi , no me puedo unir si no estas en un canal 🙄.')
          return;
        }else if(message.guild.voiceConnection){
        
            message.channel.send(`ya estoy en ${canal}, no rompas las bolas 😡.`)
           return;
        } else{
            
                canal.join().then(connection => {
                    
                    const streamOptions = { seek: 0, volume: 1 };
                    const url = ytdl('https://www.youtube.com/watch?v=R0lqowYD_Tg',{filter:'audioonly'})
                    const dispatcher = connection.play(url,streamOptions)
                   
                    dispatcher.on("end", end => {
                        console.log("left channel");
                        dispatcher.leave();})
                    
                }).catch(console.error);
                return;
                
         }
         }

         //Info de oscar.

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
           return;
         }
        
         //Comando para saber todo los demas comandos xD.

         if( comando ==='--help'){
             const help_embed = new Discord.MessageEmbed()
             .setColor('ffffff')
             .setTitle('Comandos')
             .setDescription('Todos los comandos del bochi 😃.')
             .addFields(
                {name:'--ping', value:'te devuelve tu ping.'},
                {name:'--tl',value:'Entra al servidor de voz y te dice troleado puto.'},
                {name:'--oscar',value:'Informacion de Oscar.'},
                {name:'--dl',value:'Hace que le borren los msj a alguien uwu.'}
             )
             .setFooter('Terminaron los comandos padree 🤗🤗.')

             message.channel.send(help_embed)
             message.channel.send('de nada padree 🥰🥰🥰.')
             return;
         }
         
        if(comando === '--mide'){
          
          let tamaño = Math.floor(Math.random()*30)
          message.reply(`te mide ${tamaño}cm 😏😶.`)
          return;
          }
  
})