module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css'
				}
			}
		},
        concat: {
            css: {
                src: [
                    'css/*.css'
                ],
                dest: 'css/combined/app.css'
            },
            js: {
                src: [
                    'js/*.js'
                ],
                dest: 'js/combined/app.js'
            }
        },
        cssmin: {
            css: {
                src: 'css/combined/app.css',
                dest: 'css/combined/app.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'js/combined/app.js': ['js/combined/app.min.js']
                }
            }
        },
		watch: {
			scss: {
				files: '**/*.scss',
				tasks: ['compass']
			},
            css:{
                files: 'css/*.css',
                tasks: ['concat:css', 'cssmin']
            },
            js:{
                files: 'js/*.js',
                tasks: ['concat:js', 'uglify']
            }
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('base-dev',['compass','concat:css', 'cssmin','concat:js', 'uglify']);
	grunt.registerTask('default',['base-dev','watch']);
}
