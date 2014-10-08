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
			angular: {
				files: {
					'public/scripts/app.min.js': ['<%= concat.js.src %>']
				}
			},
			js: {
				src: [
					'assets/jquery/jquery-1.11.1.js',
					'assets/jquery/plugin/*.js',
				],
				dest: 'public/scripts/main.min.js'
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
					'<%= uglify.js.src %>',
				],
				tasks: ['uglify']
			},
			sass: {
				files: ['assets/sass/*.scss'],
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
	
}