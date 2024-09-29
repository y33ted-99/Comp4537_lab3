// server.js

const express = require('express');
const Utils = require('./modules/Utils');
const fs = require('fs');
const path = require('path');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.routes();
  }

  routes() {
    this.app.get('/getDate', (req, res) => {
      const name = req.query.name || 'Guest';
      const message = Utils.getGreeting(name);
      res.send(`<div style="color: blue;">${message}</div>`);
    });

    this.app.get('/writeFile', (req, res) => {
      const text = req.query.text;
      const filePath = path.join(__dirname, 'file.txt');

      fs.appendFile(filePath, text + '\n', { flag: 'a+' }, (err) => {
        if (err) {
          return res.status(500).send('Error writing to file');
        }
        res.send('Text appended successfully');
      });
    });

    this.app.get('/readFile/:filename', (req, res) => {
      const filePath = path.join(__dirname, req.params.filename);
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return res.status(404).send(`File not found: ${req.params.filename}`);
        }
        res.send(`<pre>${data}</pre>`);
      });
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

const server = new Server();
server.start();
