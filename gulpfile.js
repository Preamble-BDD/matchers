"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var vinylSource = require("vinyl-source-stream");
var watcher = gulp.watch(["dist/**/*.js", "!dist/preamble-matchers.js"], ["bundle"]);

watcher.on("change", function(event) {
  console.log("File " + event.path + " was " + event.type + ", running tasks...");
});

gulp.task("bundle", function () {
    // return browserify("dist/main.js", "debug")
    return browserify("dist/matchers.js")
    .bundle()
    .pipe(vinylSource("preamble-matchers.js"))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("default", ["bundle"]);
