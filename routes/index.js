var pm2 = require('pm2');
var os = require('os');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  pm2.connect(function(err) {
      pm2.list(function(err, process_list) {
        var _os = {
          "hostname": os.hostname(),
          "tyoe": os.type(),
          "platform": os.platform(),
          "arch": os.arch(),
          "uptile": os.uptime(),
          "totalmem": os.totalmem(),
          "freemem": os.freemem(),
          "cpus": os.cpus(),
          "networkInterfaces": os.networkInterfaces()
        }
        res.render('index', {servers: process_list, os: _os});
      });
  });
});

module.exports = router;
