module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Menggambungkan beberapa file menjadi satu
		 * 
		 * @author Fathur Rohman
		 */
		concat: {
			js: {
				src: [
					
					
					// external library, harus diincluse sebelum kode buatan
					// sendiri, agat dapat ke load
					//'assets/js/ui-bootstrap-tpls-0.11.2.min.js',
					'assets/angularjs/modules/*',

					// Kode yang di develop semuanya disini
					'assets/angularjs/main.js',
					'assets/angularjs/route.js',
					'assets/angularjs/controllers/*',
					'assets/angularjs/directives/*',
					'assets/angularjs/services/*'
				],
				dest: 'public/scripts/app.js'
			}
		},

		/**
		 * Minify atau compress scripts agar loading
		 * lebih cepat karena ukurannnya lebih kecil
		 * 
		 * @author Fathur Rohman
		 */
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
					'<%= grunt.template.today("yyyy-mm-dd") %> */ \n',
				mangle: false
			},
			angular: {
				files: {
					'public/scripts/app.min.js': ['<%= concat.js.src %>']
				}
			},
			jslib: {
				src: [
					'assets/jquery/jquery-1.11.1.js',
					//'public/packages/bootstrap/bootstrap.js',
					'assets/js/modernizr-2.6.2-respond-1.1.0.min.js',
					
					'assets/highcharts/js/highcharts.js',
					'assets/highcharts/js/highcharts-more.js',

					'assets/jquery/plugin/*.js',
				],
				dest: 'public/scripts/lib.min.js'
			}
		},

		/**
		 * Sass styling.
		 * 
		 * @author Fathur Rohman
		 * @source https://www.npmjs.org/package/grunt-contrib-sass
		 */
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				src: 'assets/sass/main.scss',
				dest: 'public/styles/main.css'
			}
		},


		/**
		 * Autorunt task dan mendeteksi perubahan tanpa harus
		 * mengulangi menjalankan perintah grunt
		 */
		watch: {
			concat: {
				files: ['<%= concat.js.src %>'],
				tasks: ['concat']
			},
			uglify: {
				files: [
					'<%= concat.js.src %>',
					'<%= uglify.jslib.src %>',
				],
				tasks: ['uglify']
			},
			sass: {
				files: ['assets/sass/*.scss'],
				tasks: ['sass']
			},
			all: {
				files: 'index.html',
				options: {
					livereload: true
				}
			}
		},

		// grunt-express will serve the files from the folders listed in `bases`
		// on specified `port` and `hostname`
		express: {
			all: {
				options: {
					port: 9000,
					hostname: "0.0.0.0",
					bases: ['D:\\www\\mg2.0\\public'], 	// Replace with the directory you want the files served from
												// Make sure you don't use `.` or `..` in the path as Express
												// is likely to return 403 Forbidden responses if you do
												// http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
					livereload: true
				}
			}
		},

		// grunt-open will open your browser at the project's URL
		open: {
			all: {
				// Gets the port from the connect configuration
				path: 'http://localhost:<%= express.all.options.port%>'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
		'concat',
		'sass',
		'uglify',

		'express',
		'open',
		'watch',
	]);
	
}