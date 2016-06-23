/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  
grunt.registerTask("prepareModules", "Finds and prepares modules for concatenation.", function() {

    grunt.file.expand("public/javascript/modules/*").forEach(function (dir) {

        var dirName = dir.substr(dir.lastIndexOf('/')+1);

        var concat = grunt.config.get('concat') || {};
        var uglify = grunt.config.get('uglify') || {};
        
        concat[dirName] = {
            src: [dir + '/**/*.js'],
            dest: 'public/javascript/modules/' + dirName + '/'+ dirName + 'Module.js'
        };
             
        
        grunt.config.set('concat', concat);
                
    });
    
     grunt.task.run('concat')
     
});

  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
          build: {
            files: {
              'public/javascript/modules/users/usersModule.min.js' : 
              ['public/javascript/modules/users/usersModule.js']
            }
          }
    },
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
                                'public/javascript/modules/**/*.min.js',
                                'public/stylesheets/*.css'
                                ]
        }
      }
    },
    // jshint: {
    //   options: {
    //     jshintrc: '.jshintrc',
    //     jshintignore: '.jshintignore',
    //   },
    //   all: ['Gruntfile.js', 'public/javascript/**/*.js' ]
    // },
    watch: {
      jshint: {
        files: ['public/javascript/**/*.js'],
        tasks: ['jshint','injector']
      }
    }
  });
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['injector', 'jshint', 'watch','prepareModules', 'concat', 'uglify']);

};
