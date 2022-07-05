const express = require('express');
const app = express();
const session = require('use-session');
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Mongo = require("mongodb");
const MongoClient = Mongo.MongoClient;
const uri =
  'mongodb://localhost:27017';
const client = new MongoClient(uri);

let posts;
app.use(async (req, res, next) => {
  await client.connect();
  const database = client.db('blog2');
  posts = database.collection('posts');

  next();
});//gets database and posts collection

app.use(require('cors')({
  origin: 'http://localhost:3000',
  credentials: true
}));//enables cors

app.post(('/register'), async (req, res, next) => {

  if (!req.body.username) {
    return next(new Error('name is required'))
  }
  const theUser = await users.insertOne({ name: req.body.name });//insert
  if (err) { return next(err) }
  res.send(theUser);

})


app.post('/login', async (req, res, next) => {
  let loginInfo = await users.find({ name: req.body.name });//insert
  if (err) { return next(err) };

  if (!result.length) { return next(new Error('invalid name/pswd')) }
  bycrypt.compare(req.body.password, results[0].password, (err, result) => {
    if (err) { return next(err) };
    if (!result) { return next(new Error('invalid name/pswd')) }
    req.session.user = req.body.username;
    res.redirect('/admin')
  })
});
function sessionOnlyMiddleware(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/')
  }
}
app.use('/admin', sessionOnlyMiddleware, (req, res, next) => {
  res.send('you have entered the site!')
});
app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
})


app.route('/posts')
  .get(async (req, res, next) => {
    const thePosts = await posts.find().toArray();
    res.send(thePosts);
  }) //gets all posts
  .post(async (req, res, next) => {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
      author: 'Joe',
      date: new Date()
    };

    await posts.insertOne(newPost);  //inserts new post

    res.status(201)
      //.location(`/posts/${newPost._id}`)
      .send(newPost);
  });

app.post('/posts/:id/comments', async (req, res, next) => { //adds comment to post
  const newComment = {
    body: req.body.body,
    author: 'Kamala',
    date: new Date()
  };

  const result = await posts.updateOne({ _id: Mongo.ObjectId(req.params.id) }, { $push: { comments: newComment } });

  if (!result.modifiedCount) {
    return res.status(404).send('Not found');
  }

  res.status(201)
    //.location(`/posts/id/${newComment._id}`)
    .send(newComment);
});

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
