const Discord = require('discord.js');
const dotenv = require('dotenv');
const say = require('say');
dotenv.config();

const client = new Discord.Client();

client.on('message', async (message) => {
  if (!message.guild) return;

  if (message.content.startsWith('/say ')) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

      const parts = message.content.split(' ');

      say.export(parts.splice(2).join(' '), parts[1], 1, 'say.wav', (err) => {
        if (err) {
          return message.reply(err.message);
        }

        connection.play('./say.wav');
      });
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
