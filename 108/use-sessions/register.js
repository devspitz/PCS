require bycrypt
require pool

module.exports = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return next(new Error('all input are required'))
    }
    bycrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) { return next(err) }
        pool.query('INSERT INTO users (name, password) VALUES (?,?)'),
            [req.body.username, hash],
            (err, results, fields) => {
                if (err) { return next(err) }
                res.redirect('/');
            }
    })
}