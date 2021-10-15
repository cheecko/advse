const { v4: uuidv4 } = require('uuid')
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.send('Hello World');
})
mmmm
app.get('/api/v1/users/:userId', (req, res) => {
    var users = {}
    let randomuserid = uuidv4()
    let user = {
        vorname: "Anne",
        nachname: "Musterfrau",
        userid: randomuserid
    }
    users[randomuserid] = user;
    let myuser = users[randomuserid];
    return res.send(myuser);
});

let server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Webserver running at http://%s:%s", host,
        port)
})