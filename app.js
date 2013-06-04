var http = require('http'),
	util = require('util'),
	colors = require('colors'),
	httpProxy = require('http-proxy');

httpProxy.createServer( require('connect-gzip').gzip({ matchType: /.?/ }),
{
  router: {
    'forever.habitat4.info': '127.0.0.1:8085',
    'nmon.habitat4.info' : '127.0.0.1:3000'
  }
}).listen(80);
util.puts('http proxy server'.blue + ' started '.green.bold + 'on port '.blue + '80'.yellow);
util.puts('forever.habitat4.info '.blue + ' forwarding to localhost '.green.bold + 'on port '.blue + '8085 '.yellow);

