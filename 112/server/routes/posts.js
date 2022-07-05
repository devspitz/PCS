var router = express.Router();
router.route('/')
    .get(async (req, res, next) => {
        const thePosts = await global.posts.find().toArray();
        res.send(thePosts);
    })
    .post(async (req, res, next) => {
        const newPost = {
            title: req.body.title,
            body: req.body.body,
            author: 'Joe',
            date: new Date()
        };

        await global.posts.insertOne(newPost);

        res.status(201)
            //.location(`/posts/${newPost._id}`)
            .send(newPost);
    });

router.post(':id/comments', async (req, res, next) => {
    const newComment = {
        body: req.body.body,
        author: 'Kamala',
        date: new Date()
    };

    const result = await global.posts.updateOne({ _id: Mongo.ObjectId(req.params.id) }, { $push: { comments: newComment } });

    if (!result.modifiedCount) {
        return res.status(404).send('Not found');
    }

    res.status(201)
        //.location(`/posts/id/${newComment._id}`)
        .send(newComment);
});

module.exports = router;