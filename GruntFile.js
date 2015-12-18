/**
 * This file should generate the following reports for use by certification -
 *
 * tests - reports/tests.xml
 * source lines of code - reports/sloc.json
 * code coverage - reports/coverage/lcov.info
 */
module.exports = function (grunt) {

  'use strict';

  //sets the base path in case an action changes the cwd
  var path = require('path');
  var baseFilePath = path.dirname(__filename);
  var reportFilePath = path.join(baseFilePath, '/reports');

  grunt.initConfig({

    jshint: {
      files: ['GruntFile.js', 'public/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc',
        ignores: ['**/bower_components/**', 'dist/**/*.min.js']
      }
    },

    karma: {
      default: {
        configFile: 'karma.conf.js'
      },
      dist: {
        configFile: 'karma-dist.conf.js'
      }
    },

    sloc: {
      options: {},
      default: {
        options: {
          reportType: 'json', //stdout or json
          reportPath: path.join(reportFilePath, 'sloc.json')
        },
        files: {
          'public': ['[^bower_components]**.js'],
          'src': ['**']
        }
      }
    },

    clean: {
      default: ['default'],
      dist: ['dist', 'workflow.json'],
      docs: ['docs'],
      reports: ['reports'],
      tpl: ['dist/app.template.js', 'dist/manifest.js']
    },

    mkdir: {
      default: {},
      dist: {
        options: {
          create: ['dist']
        }
      }
    },

    tdmanifest: {
      default: {
        options: {
          src: 'manifest.json',
          dest: 'dist/manifest.js',
          module: 'com.td.oca.examplePersonal',
          name: 'manifest'
        }
      }
    },

    ngtemplates: {
      default: {
        options: {
          module: 'com.td.oca.examplePersonal',
          base: 'test'
        },
        cwd: 'public',
        src: ['tpl/**/*tpl.html', 'states/**/*tpl.html'],
        dest: 'dist/app.template.js'
      }
    },

    less: {
      default: {
        options: {
          compress: true,
          cleancss: false,
          optimization: 2
        },
        files: [
          {
            expand: true,
            cwd: "src/less",
            src: ["styles.less"],
            dest: "public/styles",
            ext: ".css"
          }
        ]
      }
    },

    csscomb: {
      options: {
        config: 'src/less/.csscomb.json'
      },
      default: {
        expand: true,
        cwd: 'public/styles',
        src: ['*.css'],
        dest: 'public/styles'
      }
    },

    csslint: {
      options: {
        csslintrc: 'src/less/.csslintrc'
      },
      default: [
        'public/styles/*.css'
      ]
    },

    concat: {
      options: {
        stripBanners: false
      },
      basic: {
        files: {
          'dist/README.md': ['README.md'],
          'dist/manifest.json': ['manifest.json'],
          'dist/package.json': ['package.json'],
          'dist/workflow.json': ['workflow.json'],
          'dist/styles/app-styles.less': ['src/styles/app-styles.less'],
          'dist/bower.json': ['bower.json']
        }
      },
      distribution: {
        src: ['public/app.js',
          'dist/manifest.js',
          'dist/app.template.js',
          'public/states/**/*.js',
          'public/filters/**/*.js',
          'public/directives/**/*.js',
          'public/services/**/*.js',
          'public/i18n/**/*.js'],
        dest: 'dist/td-example-personal.js'
      }
    },

    ngAnnotate: {
      default: {},
      dist: {
        files: {
          'dist/td-example-personal.js': ['dist/td-example-personal.js']
        }
      }
    },

    uglify: {
      options: {
        compress: {
          global_defs: {
            DEBUG: false
          },
          dead_code: true,
          drop_console: true,
          evaluate: true
        }
      },
      default: {
        files: {
          'dist/td-example-personal.min.js': ['dist/td-example-personal.js']
        }
      }
    },
    copy: {
      default: {
        src: 'mock-data/**',
        dest: 'dist/'
      }
    },
    watch: {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['src/less/**/*.less'],
        tasks: ['less', 'csscomb', 'csslint'],
        options: {
          nospawn: true
        }
      }
    },

    ngdocs: {
      options: {
        dest: 'docs',
        html5Mode: false,
        title: "com.td.oca.examplePersonal Docs",
        bestMatch: true,
        startPage: '/app/com.td.oca.examplePersonal'
      },
      default: {
        src: ['public/**/*.js', '!**/bower_components/**'],
        title: 'Documentation',
        api: true
      }
    },

    bower: {
      default: {
        options: {
          copy: false
        }
      }
    },

    wiredep: {
      html: {
        src: [
          'public/index.html'
        ],
        devDependencies: true,
        exclude: ['html5shiv', 'es5-shim', 'angular-mocks', 'jquery-simulate', 'jquery', 'td-core-bootstrap-style']
      },
      karma: {
        src: ['karma.conf.js', 'karma-dist.conf.js'],
        devDependencies: true,
        exclude: ['html5shiv', 'es5-shim', 'jquery-simulate', 'td-core-bootstrap-style'],
        fileTypes: {
          js: {
            block: /(([\s\t]*)\/\/\s*bower:js*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
            detect: {
              js: /'(.*\.js)'/gi
            },
            replace: {
              js: '\'{{filePath}}\','
            }
          }
        }
      }
    },

    workflow: {
      options: {
        // Task-specific options go here.
      },
      dist: {
        // Target-specific file lists and/or options go here.
      }
    }

  });

  // Load in all the grunt tasks
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', 'td_grunt_td_manifest', 'td-core-grunt-*'],
    scope: 'devDependencies'
  });

  /**
   * Modify a list of tasks by adding the target to the task, if the target
   * is available. If the target is not available, look for a default target
   * and use that if it's available.
   *
   * The enhances the default behaviour of grunt multitasks, and allows for
   * an alternate means of controlling task dependencies.
   *
   * For example, given the 'copy' task and the 'dist' target, this function
   * will return the 'copy:dist' task, if 'copy:dist' exists.
   *
   * @param target The target to be applied
   * @param tasks The list of tasks to modify
   * @returns the modified task list
   */
  var applyTargetToTaskList = function (target, tasks) {
    target = target || 'default';

    return tasks.map(function (task) {
      if (task.indexOf(':') > -1) {
        // if the task already has a target just return the task
        return task;
      } else if (grunt.config.get(task) && grunt.config.get(task + '.' + target)) {
        // if the task + target exists in the config, then use it
        return task + ':' + target;
      } else if (grunt.config.get(task) && grunt.config.get(task + '.default')) {
        // if the task + 'default' exists then use that
        return task + ':default';
      } else if (!grunt.config.get(task) && grunt.task.exists(task)) {
        // if the task is registered directly, then pass the target along
        return task + ':' + target;
      } else {
        return task;
      }
    });
  };

  /**
   * the default tasks of setting up the environment and generating base files
   */
  grunt.registerTask('default', function (target) {
    grunt.task.run(applyTargetToTaskList(target, [
      'bower', 'wiredep', 'less', 'csscomb', 'screenshots'
    ]));
  });

  /**
   * builds the angular documentation
   */
  grunt.registerTask('docs', function (target) {
    grunt.task.run.apply(grunt.task, applyTargetToTaskList(target, [
      'clean:docs', 'ngdocs'
    ]));
  });

  /**
   * runs the applicable tests and generates testing reports
   */
  grunt.registerTask('test', function (target) {
    grunt.task.run(applyTargetToTaskList(target, [
      'clean:reports', 'jshint', 'karma', 'sloc'
    ]));
  });

  /**
   * builds the css files for the Experience
   */
  grunt.registerTask('css', function (target) {
    grunt.task.run(applyTargetToTaskList(target, [
      'less', 'csscomb', 'csslint'
    ]));
  });

  /**
   * runs the distribution build
   */
  grunt.registerTask('dist', function () {
    grunt.task.run(applyTargetToTaskList('dist', [
      'default', 'clean', 'mkdir', 'tdmanifest', 'ngtemplates', 'workflow', 'concat',
      'ngAnnotate', 'uglify', 'test', 'copy', 'clean:tpl', 'docs'
    ]));
  });

};
