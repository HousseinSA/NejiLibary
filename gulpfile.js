// import gulp function and gulp-sass for compiling and gulp-purge for removing unused css files
const { src, dest, watch, series } = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const purge = require("gulp-purgecss")
// compiling sass and remiving unused css
function compileSass() {
  return src("NejiGentel/*.scss")
    .pipe(sass())
    .pipe(purge({ content: ["*.html"] }))
    .pipe(dest("css"))
}
// watching for sass and html changes

function watchSass() {
  watch(["NejiGentel/**/*.scss", "*.html"], compileSass)
}

exports.default = series(compileSass, watchSass)
