'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          open: true,
          middleware: function (connect) {
            return [
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static('app')
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('default', 'connect:server:keepalive');

};