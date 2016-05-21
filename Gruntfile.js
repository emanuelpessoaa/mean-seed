/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    injector: {
      options: {
        template: 'public/index.html',
        min: true,
        relative: true,
        addRootSlash: true
        },
      local_dependencies: {
        files: {
          'public/index.html':  ['bower.json',
                                'public/javascript/*.js',
                                'public/javascript/modules/**/*.js',
                                'public/stylesheets/*.css'
                                ]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        jshintignore: '.jshintignore',
      },
      all: ['Gruntfile.js', 'public/javascript/**/*.js' ]
    },
    watch: {
      jshint: {
        files: ['public/javascript/**/*.js'],
        tasks: ['jshint','injector']
      }
    }
  });
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['injector', 'jshint', 'watch']);

};
