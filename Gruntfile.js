module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			js: {
				src: [
					'public/scripts/angular-main.js',
					'public/scripts/angular-route.js',
					'public/scripts/controllers/*.js',
					'public/scripts/directives/*.js',
					'public/scripts/services/*.js'
				],
				dst: 'public/scripts/mg.js'
			}
		},
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
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat']);
	
}