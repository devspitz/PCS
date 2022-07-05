const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const $ = require('jquery');
app.use(express.static(path.join(__dirname, 'public')));

const io = require('socket.io');
const { parse } = require('querystring');
const socketIo = io(server)//sets up a server/ connection on the http server
let chatters = [];

socketIo.on('connection', (socket) => {
  //socket.emit('message', 'a user connected');
  let name;

  socket.on('login', (n, callback) => {
    if (chatters.find(c => c === n)) {
      return callback('name already used') /// console.log(duplicate); //you can pass in a callback
    }
    socket.broadcast.emit('listing', chatters)
    name = n;
    chatters.push(n)

    socket.broadcast.emit('info', `${n} joined our chat!, send message to @${n}`)
    socket.on('message', msg => {
      //  if (msg) {//if message begins with @, then, a=take masgge first word, till first space and see which chatter matches it, and then send only to him(how only him?) the rest of the sliced message
      //  msg
      //}
      socket.emit('message', { user: name, msg });//every client will get it
    });
    socket.on('typing', msg => {
      socket.emit('typingMessage', { user: name, msg });
    });

    socket.on('disconnect', () => {
      chatters = chatters.filter(c => c !== name)
      socketIo.emit('info', `${name} left our chat!`);//every client will get it includong myself
    });
    callback();
  });
});

app.use('/', (req, res, next) => {
  res.end('hello world')
});
server.listen(80)
