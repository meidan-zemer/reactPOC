var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
//var es = require('event-stream');

gulp.task("bundle", function () {
	var files =[
		"./app/app.jsx",
		"./app/scene.jsx"
	];
	
    return browserify({
        entries: files,
        debug: true
    }).transform(reactify)
        .bundle()
		.pipe(source("bundle.js"))
        .pipe(gulp.dest("app/dist"))

});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/lib/jquery/dist/jquery.min.js","app/app.css","data/flowcharts.json"])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});