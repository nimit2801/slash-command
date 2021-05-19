require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
const nodeFetch = require('node-fetch');
let PREFIX = '/';

client.once('ready', () => {
  console.log('The bot is ready lets go!');

  //   client.api
  //     .applications(client.user.id)
  //     .guilds('744874959905751091')
  //     .commads.post({
  //       data: {
  //         name: 'hello',
  //         description: 'Replies with Hello World!',
  //       },
  //     });
});

// Helper fucntions for console.log
function log(args) {
  console.log(args);
}

class slash {
  constructor(message) {
    this.message = message;
  }
  async showMessage() {
    log(this.message);
  }
}

client.on('interactions', (interactions) => {
  log(interactions);
});

client.on('message', (message) => {
  if (message.content.startsWith === PREFIX) {
    let [command] = message.content.split(' ');
    if (command === 'test') {
      const slash1 = new slash(message);
      slash1.showMessage();
    }
  } else {
    const slash1 = new slash(message);
    slash1.showMessage();
  }
});

client.login(process.env.BOT_TOKEN);
