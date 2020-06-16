# Discord Announcer Bot

A very simple bot for text-to-speech announcements in voice channels.
Originally built so I can get The Computer to talk to players in a [Paranoia](https://en.wikipedia.org/wiki/Paranoia_(role-playing_game)) game.

## Setup

-  [Create a new discord bot](https://discord.com/developers/applications/) with `Send Messages`, `Manage Messages`, `Connect` and `Speak` permissions and add it to your server.
- Copy `.env.dist` to `.env` and add the `DISCORD_TOKEN` value for your bot. You can also pass this in a standard environment variable
- Setting `DISCORD_PREFIX` will override the default `/say` prefix to `/<DISCORD_PREFIX>` with your value
-  `node index.js` to boot the bot

## Use

- Join a voice channel
- Run `/say` (or `/<DISCORD_PREFIX>` if you've set it) with a voice type and message, such as `/say Alex Hello world`

### Todo

- Allow default voice setting so it doesn't need passed every time
- Permissions limitations for who can make the bot talk
- ???
