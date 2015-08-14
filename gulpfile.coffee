gulp = require 'gulp'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
reactify = require 'reactify'
watchify = require 'watchify'
_ = require 'lodash'

customOpts =
        entries: ['./src/main.js'],
        transform: [reactify]
        debug: development?

gulp.task 'build', ->
        b = browserify customOpts
        b.bundle().pipe(source('app.js')).pipe(gulp.dest('./lib'))

gulp.task 'watch', ->
        opts = _.assign({}, watchify.args, customOpts)
        b = watchify(browserify(opts))
        b.bundle().pipe(source('app.js')).pipe(gulp.dest('./lib'))
