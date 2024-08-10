const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const client = new Discord.Client();
const prefix = "--";
let userdelete;
let strariux = 0;

client.login("Nzc2MzA4NzQzNDE4Njc1MjEw.GOaL3U.ufQ87wiXdOXJIgdvBMzuF-46aaAm-qOsp2rLYg");

client.on('ready', () => {
  client.user.setPresence({
    activity: {
      name: "tocar a tu mama en la cama y jugar al magic",
      type: "STREAMING"
    },
    status: "online"
  });
});

client.on("message", function (message) {
  if (message.author.bot) return;

  // Delete messages
  if (message.author.id == userdelete) {
    message.delete();
    return;
  }

  // Support messages
  let text = message.content.toLowerCase();
  if (text.includes("estoy triste")) {
    message.channel.send(`Ánimos ${message.author} 😘😘😘.`);
    return;
  } else if (text.includes("puta")) {
    message.channel.send("Como tu hermana 😈😈😈😈.");
    return;
  } else if (text.includes("juegan") || text.includes("jugas") || text.includes("jugamos")) {
    message.channel.send("con tu hermana juego 🐔🐲🦄🦧🦍🐒🐼.");
    return;
  }

  // Reactions
  let numero_ramdom = Math.random();
  if (message.member.user.discriminator == 4190 && numero_ramdom > 0.5) {
    message.react("🧙‍♂️");
  } else if ((message.member.user.discriminator == 1891 || message.member.user.discriminator == 6888) && Math.random() > 0.5) {
    message.react("🅿️");
    message.react("🇺");
    message.react("🇹");
    message.react("🅾");
  }

  console.log(message.content.startsWith(prefix));
  if (!message.content.startsWith(prefix)) return;

  // Command handling
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const comando = args.shift().toLowerCase();


  if (comando === 'nodl') {
    userdelete = null;
    message.delete();
    return;
  }
  
  if (comando === 'dl') {
    userdelete = message.mentions.users.first()?.id;
    message.delete();
    return;
  }

  if (comando === 'ping') {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong!, ${timeTaken}ms.`);
    return;
  }

  if (comando === 'strariux') {
    strariux++;
    message.reply(`Strariux se comió ${strariux} pija${strariux > 1 ? 's' : ''} tremenda 😏.`);
    return;
  }

  if (comando === 'tl') {
    let canal = message.member.voice.channel;

    if (!canal) {
      message.channel.send('Papi, no me puedo unir si no estás en un canal 🙄.');
      return;
    }

    canal.join().then(connection => {
      const streamOptions = { seek: 0, volume: 1 };
      const url = ytdl('https://www.youtube.com/watch?v=R0lqowYD_Tg', { filter: 'audioonly' });
      const dispatcher = connection.play(url, streamOptions);

      dispatcher.on("finish", () => {
        canal.leave();
      });
    }).catch(console.error);
    return;
  }

  if (comando === 'oscar') {
    const msg_embed = new Discord.MessageEmbed()
      .setColor('ffffff')
      .setTitle('Oscar')
      .setDescription('Hola soy oscar ☺☺.')
      .setThumbnail('https://wamiz.es/uploads/article/images/wysiwyg/2016/12/gatos-con-sombreros-hechos-de-11s.jpg')
      .addFields(
        { name: 'Shoko me la pelas 😏😏😏', value: 'Thiago la putita del mafia 🙂🙂🙂🙂' },
        { name: '\u200B', value: '\u200B' }
      )
      .setFooter('tomi es re puto 😣😣😣.');
    message.channel.send(msg_embed);
    return;
  }

  if (comando === 'help') {
    const help_embed = new Discord.MessageEmbed()
      .setColor('ffffff')
      .setTitle('Comandos')
      .setDescription('Todos los comandos del bochi 😃.')
      .addFields(
        { name: '--ping', value: 'Te devuelve tu ping.' },
        { name: '--tl', value: 'Entra al servidor de voz y te dice troleado puto.' },
        { name: '--oscar', value: 'Información de Oscar.' },
        { name: '--dl', value: 'Hace que le borren los msj a alguien uwu.' }
      )
      .setFooter('Terminaron los comandos padree 🤗🤗.');
    message.channel.send(help_embed);
    message.channel.send('De nada padree 🥰🥰🥰.');
    return;
  }

  if (comando === 'mide') {
    let tamaño = Math.floor(Math.random() * 31);
    if (tamaño > 20) {
      message.reply(`Tremenda tula de ${tamaño}cm 😏😶.`);
    } else if (tamaño >= 6) {
      message.reply(`Traigan la lupa para ver este maní de ${tamaño}cm 🧐.`);
    } else {
      message.reply(`Te mide ${tamaño}cm 😏😶.`);
    }
    return;
  }
});
