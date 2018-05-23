const path = require('path');
const express = require('express');
const http = require('http');

var port = process.argv[2] || 4000;
var webFolder = path.join(__dirname, 'web');
var indexPath = path.join(webFolder, 'index.html');
// static server
const app = express();
var router = express.Router();
app.use(express.static(webFolder));
const server = http.createServer(app);
// api
router.get('/', function(req, res) {
    res.json({
        message: 'This is the api'
    });
});

app.use('/api', router);
app.get('*', function(req, res) {
    res.sendFile(indexPath);
});
server.listen(port, function listening() {
    console.log('Listening on %d', server.address().port);
});
