const Discord = require('discord.js');
const dotenv = require('dotenv');
const say = require('say');
dotenv.config();

const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN);

client.on('message', async (message) => {
  if (!message.guild) return;

  if (message.content.startsWith('/say ')) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

      const toSay = message.content.substr(5);

      say.export(toSay, 'Fiona', 1, 'output.wav', (err) => {
        if (err) {
          return console.error(err);
        }

        const dispatcher = connection.play('./output.wav');

        dispatcher.on('finish', () => {
          console.log('Finished playing!');
        });
      });
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
