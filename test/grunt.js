module.exports = function(grunt) {
  'use strict';

  grunt.file.mkdir('fixtures/output');

  grunt.initConfig({
    pkg: {
      name: 'grunt-md5',
      version: '0.0.1'
    },

    test: {
      tasks: ["*_test.js"],
    },

    clean: {
      output: ['fixtures/output']
    },

    md5: {
      compile: {
        files: {
          'fixtures/output': 'fixtures/js/test.js'
        },
        options: {
          keepExtension: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadTasks('../tasks');
  grunt.registerTask('default', 'clean md5 test:tasks');
};