var express = require('express')
	, fs = require('fs');

module.exports =function(parent, options){
	var verbose = options.verbose;
	fs.readdirSync(__dirname + '/../controllers').forEach(function(name){
		var obj =require('./../controllers' + name)
			, name = obj.name || name
			, prefix = obj.prefix || ''
			, app = express()
			, method
			, path;


		if (ong.engine) app.set('view engine', obj.engine);
		app.set('views', __dirname + '/../controllers/' + name + '/views');

		if (obj.before) {
			path = '/' + name + '/:' + name + '_id';
			app.all(path, obj.before);
			verbose && console.log('    All %s -> berfore', path);
			path = '/' + name + '/:' + name + '_id/*';
			app.all(path, obj.berfore);
			verbose && console.log('    All %s -> berfore', path);
		}


		for (var key in obj) {
			if (~['name', 'prefix', 'engine', 'before'].indexOf(key)) continue;

			switch (key) {
		        case 'show':
		          method = 'get';
		          path = '/' + name + '/:' + name + '_id';
		          break;
		        case 'list':
		          method = 'get';
		          path = '/' + name + 's';
		          break;
		        case 'edit':
		          method = 'get';
		          path = '/' + name + '/:' + name + '_id/edit';
		          break;
		        case 'update':
		          method = 'put';
		          path = '/' + name + '/:' + name + '_id';
		          break;
		        case 'create':
		          method = 'post';
		          path = '/' + name;
		          break;
		        case 'index':
		          method = 'get';
		          path = '/';
		          break;
		        default:
		          throw new Error('unrecognized route: ' + name + '.' + key);
	      }

	      path = prefix + path;
	      app[method](path, obj[key]);
	      verbose && console.log('     %s %s -> %s', method.toUpperCase(), path, key);
		}


		parent.use(app);


	});
}