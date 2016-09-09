"use strict"

var lr = require('tiny-lr'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    connectlr = require('connect-livereload'),
    server = lr(),
    autoprefixer = require('gulp-autoprefixer'),
    emailBuilder = require('gulp-email-builder');


gulp.task('server', function () {
    connect.server({
        livereload: true,
        port: 3000
    })
});

gulp.task('html', function () {
    //gulp.run('email')
    gulp.src('*.html')
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    return gulp.src('css/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
		.pipe(autoprefixer({
		    browsers: ['last 2 versions'],
		    cascade: false
		}))
		.pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['templates/*.html', 'css/scss/**/*.scss'], ['html', 'sass']);
});

gulp.task('email', function () {
    var options = {
        encodeSpecialChars: true,
        emailTest : {
            to : 'korol.paul@gmail.com',
            from: 'korol.paul@gmail.com',
            subject : 'WG Emails test',
            nodemailer: {
                transporter: {
                    service: 'gmail',
                    auth: {
                        user: 'korol.paul@gmail.com',
                        pass: '192192192'
                    }
                    }, 
                    defaults: {} 
            }
        }
    }
    var options_yahoo = {
        encodeSpecialChars: true,
        emailTest : {
            to : 'anna.wg@yahoo.com',
            from: 'anna.wg@yahoo.com',
            subject : 'WG Emails test',
            nodemailer: {
                transporter: {
                    service: 'yahoo',
                    auth: {
                        user: 'anna.wg@yahoo.com',
                        pass: 'crm_test'
                    }
                    }, 
                    defaults: {} 
            }
        }
    }
    var options_yandex = {
        encodeSpecialChars: true,
        emailTest : {
            to : 'wg.anna@yandex.ru',
            from: 'wg.anna@yandex.ru',
            subject : 'WG Emails test',
            nodemailer: {
                transporter: {
                    service: 'yandex',
                    auth: {
                        user: 'wg.anna@yandex.ru',
                        pass: 'crm_test'
                    }
                    }, 
                    defaults: {} 
            }
        }
    }
    var options_rambler = {
        encodeSpecialChars: true,
        emailTest : {
            to : 'wg.anna@rambler.ru',
            from: 'wg.anna@rambler.ru',
            subject : 'WG Emails test',
            nodemailer: {
                transporter: {
                    service: 'rambler',
                    auth: {
                        user: 'wg.anna@rambler.ru',
                        pass: 'crm_test'
                    }
                    }, 
                    defaults: {} 
            }
        }
    }
    var options_mailru = {
        encodeSpecialChars: true,
        emailTest : {
            to : 'wg.anna@mail.ru',
            from: 'wg.anna@mail.ru',
            subject : 'WG Emails test',
            nodemailer: {
                transporter: {
                    service: 'mailru',
                    auth: {
                        user: 'wg.anna@mail.ru',
                        pass: 'crm_test'
                    }
                    }, 
                    defaults: {} 
            }
        }
    }
    var options_outlook = {
        encodeSpecialChars: true,
        emailTest : {
            to : 'p_korol@wargaming.net',
            from: 'p_korol@wargaming.net',
            subject : 'WG Emails test',
            nodemailer: {
                transporter: {
                    service: 'outlook',
                    auth: {
                        user: 'p_korol@wargaming.net',
                        pass: 'Stark_66'
                    }
                    }, 
                    defaults: {} 
            }
        }
    }

    return gulp.src(['templates/eu-wot.html'])
        .pipe(emailBuilder().build())
        .pipe(gulp.dest('.'));
});

gulp.task('default', function () {
    gulp.run('server', 'watch');
});