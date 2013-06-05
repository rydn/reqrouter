/*
	Dependencies 
 */
var http = require('http'),
	util = require('util'),
	colors = require('colors'),
	_ = require('underscore'),
	fs = require('fs'),
	httpProxy = require('http-proxy');
//	read routes
var routes = fs.readFileSync('./config.json');
routes = JSON.parse(routes);
/*
	Start http proxy
   */
httpProxy.createServer(require('connect-gzip').gzip({
	matchType: /.?/
}), {
	router: routes
}).listen(80);
util.puts('HTTP proxy server'.cyan.bold + ' forwarding from '.green.bold + '80'.green.bold);
util.puts('-----------------------------------------------------------------------------------------------'.white);
util.puts('					Running Hosts');
util.puts('-----------------------------------------------------------------------------------------------'.white);
_.each(routes, function(i, route) {
	util.puts(i.cyan + '			--------->		 '.grey + String('http://' + route).magenta.bold);
});