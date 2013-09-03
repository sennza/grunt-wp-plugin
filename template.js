/**
 * sennza-wp-plugin
 * https://github.com/sennza/grunt-wp-plugin
 *
 * Copyright (c) 2013 Bronson Quick, Sennza
 * Licensed under the GPL2 License
 */

'use strict';

// Basic template description
exports.description = 'Create a WordPress plugin.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after the question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
	init.process( {}, [
		// Prompt for these values.
		init.prompt( 'title', 'WP Plugin' ),
		{
			name   : 'prefix',
			message: 'PHP function prefix (alpha and underscore characters only)',
			default: 'sennza'
		},
		init.prompt( 'description', 'Yet Another Sennza Plugin' ),
		init.prompt( 'homepage', 'http://www.sennza.com.au/' ),
		init.prompt( 'author_name', 'Bronson Quick' ),
		init.prompt( 'author_email', 'bronson@sennza.com.au' ),
		init.prompt( 'author_url', 'http://www.sennza.com.au/' ),
	], function( err, props ) {
		props.keywords = [];
		props.version = '0.1.0';
		props.devDependencies = {
			'grunt': '~0.4.1',
			'grunt-contrib-concat':   '~0.1.2',
			'grunt-contrib-uglify':   '~0.1.1',
			'grunt-contrib-cssmin':   '~0.6.0',
			'grunt-contrib-jshint':   '~0.1.1',
			'grunt-contrib-nodeunit': '~0.1.2',
			'grunt-contrib-watch':    '~0.2.0',
			'grunt-contrib-clean':    '~0.5.0',
			'grunt-contrib-copy':     '~0.4.1',
			'grunt-contrib-compress': '~0.5.2',
			'grunt-contrib-sass':     '~0.2.2',
			'grunt-contrib-compass':  '~0.5.0',
		};
		
		// Sanitize names where we need to for PHP/JS
		props.name = props.title.replace( /\s+/g, '-' ).toLowerCase();
		// Development prefix (i.e. to prefix PHP function names, variables)
		props.prefix = props.prefix.replace('/[^a-z_]/i', '').toLowerCase();
		// Development prefix in all caps (e.g. for constants)
		props.prefix_caps = props.prefix.toUpperCase();
		// An additional value, safe to use as a JavaScript identifier.
		props.js_safe_name = props.name.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
		// An additional value that won't conflict with NodeUnit unit tests.
		props.js_test_safe_name = props.js_safe_name === 'test' ? 'myTest' : props.js_safe_name;
		props.js_safe_name_caps = props.js_safe_name.toUpperCase();

		// Files to copy and process
		var files = init.filesToCopy( props );
		
		console.log( files );
		
		// Actually copy and process files
		init.copyAndProcess( files, props );
		
		// Generate package.json file
		init.writePackageJSON( 'package.json', props );
		
		// Done!
		done();
	});
};