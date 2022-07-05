const router = express.Router();
//install bcrypt
//npt working 838
router.post('/register', (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return next(new Error('you need to provide a username and password'))
    }
    bycrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
            return next(err);
        }
        try {
            const result = await global.users.insertOne({ name: req.body.name, password: hash })
            return res.sendStatus(201);
        } catch (err) {
            if (err.code === 11000) {
                return next(new Error('usename exists'))

            }
            return next(err)
        }
    })
});
router.post('/login', async (req, res, next) => {
    const user = await global.users.findOne({ name: req.body.username });
    if (user) {

        await bycrypt.compare(req.body.password, user.password, (err, result) => {
            if (err) { return next(err) };
            if (result) {
                req.session.user = req.body.username;
                return res.sendStatus(201);
            }

            return next(new Error('invalid name/pswd'))
            //put in try catch
        })
    }});






        router.get('/logout', (req, res, next) => {
            req.session.destroy();
            res.redirect('/');
        })

        module.exports = router;