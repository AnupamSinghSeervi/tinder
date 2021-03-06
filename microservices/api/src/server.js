var express = require('express');
var app = express();
var request = require('request');
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');
require('request-debug')(request);

var hasuraExamplesRouter = require('./hasuraExamples');

var server = require('http').Server(app);

router.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use('/', hasuraExamplesRouter);

var clientIp = require('client-ip');
app.get("/ip",function(req,res){
 let i = clientIp(req);
 res.send(i+",   "+JSON.stringify(req.headers));
})


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
