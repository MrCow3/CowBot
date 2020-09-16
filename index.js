const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

// print ready if bots executes correctly
client.once('ready', () => {
	console.log('Ready!');
});

// listining for messages
client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

  // "ping" > "pong"
  if (message.content === prefix + 'ping') {
  	 // send back "Pong." to the channel the message was sent in
  	  message.channel.send('Pong.');
  } else if (message.content === prefix + 'beep'){
      // send back "Boop."
      message.channel.send('Boop.');
  } else if (message.content === prefix + 'servInfo') {
      // print server info
      message.channel.send('Server Name: ' + '"' + message.guild.name + '"' + '\nTotal members: ' + message.guild.memberCount);

  }
})


client.login(token);
