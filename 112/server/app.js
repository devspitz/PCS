const express = require('express');
const app = express();
const http = require(
  'http'
);
const { Session } = require('inspector');
const server = http.createServer(app);
const socketIo = io(server, {
  cors: {
    origin: 'http://localhost:3000'//*=let everyone
  }
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*add in session
app.use(Session({
  secret:
}))*/
const Mongo = require("mongodb");
const MongoClient = Mongo.MongoClient;
const url = "mongodb+srv://spitzdev1:Aim1@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";

const client = new MongoClient(url);

//let posts;
app.use(async (req, res, next) => {
  await client.connect();
  const database = await client.db('blog2');
  global.posts = database.collection('posts');

  next();
});

/*app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});*/
app.use(require('cors')({
  origin: 'http://localhost:3000',
}));
app.use('/authentication', require('./routes/authentication'));
app.use('/posts', require('./routes/posts'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const e = new Error('Not Found');
  e.status = 404;
  next(e);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(8080);
