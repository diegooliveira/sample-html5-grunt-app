module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Configuração do compilador de LESSCSS.
        less: {
            all: {
                src: 'less/site.less',
                dest: 'public_html/css/<%= pkg.name %>-<%= pkg.version %>.css'
            }
        },
        // Configuração de concatenação de arquivos para que sejam necessárias
        // poucas requisições com o servidor.
        concat: {
            dist: {
                src: ['js/*.js'],
                dest: 'public_html/js/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        // Configuração do observador de alterações em arquivos. A configuração
        // atual informa que sejam observados os arquivos 
        watch: {
            options: {
                livereload: true
            },
            files: ['<%= less.all.src %>', '<%= concat.dist.src %>'],
            tasks: ['less', 'concat']
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'public_html'
                }
            }
        }
    });

    // Carregando as tarefas.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Configurando quais tarefas devem ser executadas.
    grunt.registerTask('default', ['less', 'concat', 'connect', 'watch']);
};
