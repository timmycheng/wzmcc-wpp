module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            // jade: {
            //     files: ['app/views/**'],
            //     options: {
            //         livereload: true,
            //     }
            // },
            js: {
                files: ['public/js/**', 'models/**/*.js', 'schemas/**/**.js'],
                // task: ['jshint'],
                options: {
                    livereload: true,
                }
            }
        },
        nodemon: {
            dev: {
                options: {
                    files: 'app.js',
                    script: 'app.js',
                    args: [],
                    ignoredFiles: ['README.MD', 'node_modules/**', '.DS_Store', '.vscode/**'],
                    watchedExtensions: ['js'],
                    watchedFloders: ['./'],
                    debug: true,
                    delayTime: 1,
                    env: {
                        PORT: 3000,
                    },
                    cwd: __dirname,
                }
            }
        },
        concurrent: {
            task: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true,
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-nodemon')
    grunt.loadNpmTasks('grunt-concurrent')

    grunt.option('force', true)
    grunt.registerTask('default', ['concurrent'])
}