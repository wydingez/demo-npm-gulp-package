const gulp = require('gulp')
const uglify = require('gulp-uglify')
const pipeline = require('readable-stream').pipeline
const babel = require('gulp-babel')
const rename = require("gulp-rename")
const clean = require('gulp-clean')

gulp.task('clean', function() {
  return pipeline(
    gulp.src('./dist/*'),
    clean()
  )
})

gulp.task('compress', function() {
  return pipeline(
    gulp.src('./index.js'),
    babel({
      presets: ['@babel/env']
    }),
    uglify(),
    rename('dnp.min.js'),
    gulp.dest('dist')
  )
})

gulp.task('copy', function() {
  return pipeline(
    gulp.src('./index.js'),
    rename('dnp.js'),
    gulp.dest('dist')
  )
})

gulp.task('build', gulp.series('clean', gulp.parallel('copy', 'compress', async function() {
  await console.log('build success')
})))
