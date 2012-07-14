
var express = require('express');

var app = module.exports = express();

// map .html file to ejs
app.engine('html', require('ejs').renderFile);

// make .html th default
app.set('view engin', 'html');

// 404 500 view files
app.set('views', __dirname + '/views');

// defien custom res.message method
// which stores messages in the session
app.response.message = function(msg){
	// refrence sess to session via this.req
	var sess = this.req.session;

	sess.messages = sess.messages || [];
	sess.messages.push(msg);
	return this;
}

// log
if (!module.parent) app.use(express.logger('dev'));

// static files
app.use(express.static(__dirname + '/public'));

// session support
app.use(express.cookieParser('some secret here'));
app.use(express.session());

// parse request bodies
app.use(express.bodyParser());

app.use(express.methodOverride());

// expose "messages" local variable when views are rendered
app.use(function(req, res, next){
	var msgs = req.session.messages || [];

	res.locals.messages = msgs;

	res.locals.hasMessages = !! msgs.length;

	req.session.messages = [];
	next();
});

// load controllers
require('./lib/boot')(app, {verbose: !module.parent});


// assume 'not found' in the error msgs
// is a 404. this is somewhat silly, 
// but valid. you can do whatever you like,
// set properties, use instanceof etc.
app.use(function(err, req, res, next){
  // treat as 404
  if (~err.message.indexOf('not found')) return next();

  // log it
  console.error(err.stack);

  // error page
  res.status(500).render('5xx');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
  res.status(404).render('404', { url: req.originalUrl });
});

if (!module.parent) {
	app.listen(3000);
	console.log('\n listening on port 3000\n');
}
