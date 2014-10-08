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
					'assets/angularjs/main.js',
					'assets/angularjs/route.js',
					'assets/angularjs/controllers/*.js',
					'assets/angularjs/directives/*.js',
					'assets/angularjs/services/*.js'
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
			},
			js: {
				files: {
					'public/scripts/app.min.js': ['<%= concat.js.src %>']
				}
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
				files: {
					'public/styles/main.css': 'assets/sass/main.scss'
				}
			}
		},


		/**
		 * Auto run task
		 */
		watch: {
			js: {
				files: ['<%= concat.js.src %>'],
				tasks: ['concat:js']
			},
			css: {
				files: ['<%= concat.css.src %>'],
				tasks: ['concat:css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat','uglify','sass']);
	
}