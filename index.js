const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Discord.Client();

client.login(process.env.DISCORD_TOKEN);

client.on('message', async (message) => {
  console.log(message);

  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();

      const dispatcher = connection.play('/test.mp3');

      dispatcher.on('finish', () => {
        console.log('Finished playing!');
      });
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});
