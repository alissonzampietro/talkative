export function indexController(req, res) {
    res.sendFile(__dirname + "/../public/index.html");
}