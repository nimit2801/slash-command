const express = require('express');
const app = express();
const nodeFetch = require('node-fetch');
const nacl = require('tweetnacl');

const { verifyKeyMiddleware } = require('discord-interactions');

// Your public key can be found on your application in the Developer Portal
const PUBLIC_KEY =
  'c0381853175eb3699d16d44627cdb6c5ba25bb302e26846fa60d94e4a278d959';

// const signature = req.get('X-Signature-Ed25519');
// const timestamp = req.get('X-Signature-Timestamp');
// const isValidRequest = verifyKey(
//   req.rawBody,
//   signature,
//   timestamp,
//   'MY_CLIENT_PUBLIC_KEY'
// );
// if (!isValidRequest) {
//   return res.status(401).end('Bad request signature');
// }

const port = process.env.PORT || 80;

// app.use(express.json({ extended: false }));
// app.use(express.urlencoded({ extended: false }));

app.get('/interactions', (req, res, next) => {
  res.send('Working!');
});

// app.post('/api/interactions', (req, res, next) => {
//   const message = req.body;
//   if (message.type === InteractionType.APPLICATION_COMMAND) {
//     res.send({
//       type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
//       data: {
//         content: 'Hello world',
//       },
//     });
//   }
// });

class Message {
  constructor(message, res, req) {
    this.message = message;
  }

  async getMessage() {
    console.log(this.message);
  }

  async resMessage(req, res) {
    if (this.message.type === 1) {
      res.send({
        type: 1,
      });
    } else if (this.message.type === 2) {
      if (this.message.data.name === 'bleep') {
        res.send({
          type: 4,
          data: {
            content: 'hello world!',
          },
        });
      } else if (this.message.data.name === 'blop') {
        res.send({
          type: 5,
        });
      }
    }
  }

  async updateMessage() {
    let { application_id, token, data } = this.message;
    console.log(application_id, token, data.name);
  }
}

app.put(
  '/interactions',
  verifyKeyMiddleware(
    'c0381853175eb3699d16d44627cdb6c5ba25bb302e26846fa60d94e4a278d959'
  ),
  (req, res) => {
    console.log('here');
    app.res('some reply');
  }
);

app.post(
  '/interactions',
  verifyKeyMiddleware(
    'c0381853175eb3699d16d44627cdb6c5ba25bb302e26846fa60d94e4a278d959'
  ),
  (req, res) => {
    const message = req.body;
    try {
      let message1 = new Message(message);
      message1.getMessage();
      message1.resMessage(req, res);
      message1.updateMessage();
    } catch (error) {
      console.log(error);
    }
  }
);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
