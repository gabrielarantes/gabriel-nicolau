var gulp        = require('gulp');            // Automatizador de tarefas
var sass        = require('gulp-sass');       // Compilador SASS
var cleanCSS    = require('gulp-clean-css');  // Minificador de arquivos CSS
var concat      = require('gulp-concat');     // Concatenador de arquivos
var rename      = require('gulp-rename');     // Ferramenta pra renomear arquivos
var uglify      = require('gulp-uglify');     // Minificador de arquivos JS
var plumber     = require('gulp-plumber');    // Lidando com erros
var babel       = require('gulp-babel');      // Permitir a minificação de arquivos js escritos com padrão ES6

// Sass
gulp.task('estilos', function() {
  console.log("---- compilando estilos ----");
  gulp.src('./src/scss/scss.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('./css/'))
});

gulp.task('default',function() {
  // Rodar tarefas inicialmente e então continuar monitorando
  gulp.start('estilos');
  gulp.watch('./src/scss/*.scss',['estilos']);

});