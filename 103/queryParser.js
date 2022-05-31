module.exports = (req, res, next) => {
    //10:00 for code
    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    req.searchParams = url.searchParams;
    next();
}