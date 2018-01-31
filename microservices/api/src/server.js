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

app.get("/ip",function(req,res){
  res.send(req.ip);
})
app.get("ip6",function(req,res){
  var ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(ip+"");
})
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
