var pm2 = require('pm2');
//var ping = require('ping');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  pm2.connect(function(err) {
      pm2.list(function(err, process_list) {
        res.setHeader('Content-Type', 'application/json');
        console.log(process_list)
        res.end(process_list);
      });
  });
});

module.exports = router;
/*
var ping = require('ping');

var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
});
*/
