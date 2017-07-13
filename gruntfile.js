module.exports = function(grunt) {

    var pjson = grunt.file.readJSON('package.json');

    var config = {
        concat: {
            sdk: {
                // the files to concatenate
                src: [
                   'src/Component.js',
                   'src/Input.js'
                ],
                // the location of the resulting JS file
                dest: 'dist/CloudCommponent.js'
            },

            sdkRelease: {
                // the files to concatenate
                src: ['dist/CloudCommponent.js'],

                // the location of the resulting JS file
                dest: 'dist/' + pjson.version + '.js'
            }
        },

        uglify: {
            uglifyDev: {
                files: {
                    'dist/CloudCommponent.min.js': ['dist/CloudCommponent.js']
                }
            },
            uglifyRelease: {
                files: {}
            }
        },

        bumpup: 'package.json' //update the version of package.json
    };

    config.uglify.uglifyRelease.files['dist/' + pjson.version + '.min.js'] = ['dist/' + pjson.version + '.js'];

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bumpup');

    grunt.registerTask('default', ['concat:test']);
    grunt.registerTask('release', ['concat:sdkRelease', 'uglify:uglifyRelease']);

};
/*
*/
