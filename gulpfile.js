// 'use strict';
const { init } = require('browser-sync');
var {src, dest, watch, series}                      = require('gulp');
var sass                                    = require('gulp-sass')(require('sass'));
var autoprefixer                            = require('gulp-autoprefixer');
var cleanCSS                                = require('gulp-clean-css');
var minify                                  = require('gulp-minify');
var browserSync                             = require('browser-sync').create();
var tinypng                                 = require('gulp-tinypng-compress');
var reload                                  = browserSync.reload;

function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
    watch("./src/*.html").on("change", reload);
    watch("./src/sass/**/*.sass", serveSass);
};

function serveSass(){
    return src("./src/sass/**/*.sass")
        .pipe(sass())
        .pipe(autoprefixer('last 4 versions',{
            cascade: false
        }))
        .pipe(dest("src/css"))
        .pipe(browserSync.stream());
};


function buildJS(done) {
    src(['src/js/**/**.js', '!src/js/**/*.min.js'])
    .pipe(minify({
        ext: {
            src: 'null',
                min:'.js'
            }
        }))
        .pipe(dest('./dist/js'));
        src('src/js/**.min.js')
        .pipe(dest('dist/js'));
        done();
}
    
function html(done) {
    src('src/**.html')
    .pipe(dest('dist/'));
    done();
}
    
function fonts(done) {
    src('src/fonts/**/**')
    .pipe(dest('dist/fonts'));
    done();
}

function imgmin(done) {
    src(['src/img/**/**.png', 'src/img/**/**.jpg'])
        .pipe(tinypng({key: 'gVhHhtx0KDt4pY4sy4TVxpZFZqHgZBjs'}))
        .pipe(dest('dist/img'));
    src('src/img/**/**.svg')
        .pipe(dest('dist/img'));
    done();
}
    
function buildCSS(done){
    src('src/css/**/**.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('./dist/css'));
    done();
}



exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, fonts, imgmin);