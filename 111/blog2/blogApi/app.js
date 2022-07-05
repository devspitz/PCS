var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const Mongo = require("mongodb");
const MongoClient = Mongo.MongoClient;
const uri =
  'mongodb://localhost:27017';
const client = new MongoClient(uri);

let posts;
/*app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Orgin','http://localhost:3000');
  next();
}) instead:/*/
app.use(require(cors)({
  origin: 'http://localhost:3000'
}));
app.use(async (req, res, next) => {
  await client.connect();
  const database = client.db('blog2');//itll come into existence here
  posts = database.collection('posts');
  next();
});
app.route('/posts')
  .get(async (req, res) => {
    const thePosts = await posts.find().toArray();//will get all posts
    res.send(thePosts)
  })
  .post((req, res, next) => {
    const newPost = {
      title: req.body.title,
      subtitle: req.body.subtitle,
      author: 'joe',
      date: new Date();
    }
    await posts.insertOne(newPost);
    res.status(201)
      .send(newPost);
  });
app.post('/posts/:id/comments', async (req, res, next) => {
  const newComment = {
    body: req.body.body,
    author: 'lkfsoa',
    date: new Date()
  };

  const result = await posts.updateOne({ _id: Mongo.ObjectId(req.params.id) }, { $push: { comments: newComment } })
  //y objectId??? cux x knew what this id was aobut
  console.log(result)
  //check for result here
  if (!result.modifiedCount) {

    return res.status(404).send('not sent');
  }
  res.status(201)
    .send(newComment);
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const e = new Error('not found');
  e.status = 404;
  next();
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.end();
});
app.listen(8080);
