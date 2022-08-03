const { src, dest } = require("gulp");
const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const scss = require("gulp-sass")(require("sass"));
const group_media = require("gulp-group-css-media-queries");
const del = require("del");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify-es").default;
const fileinclude = require("gulp-file-include");
const clean_css = require("gulp-clean-css");
const project_name = "dist";
const src_folder = "#src";

const path = {
	build: {
		html: project_name + "/",
		js: project_name + "/js/",
		css: project_name + "/css/",
		images: project_name + "/img/",
		fonts: project_name + "/fonts/",
		videos: project_name + "/videos/",
		audio: project_name + "/audio/",
	},
	src: {
		favicon: src_folder + "/img/favicon.{jpg,png,svg,gif,ico,webp}",
		html: [src_folder + "/*.html", "!" + src_folder + "/_*.html"],
		js: [src_folder + "/js/*.js"],
		css: [src_folder + "/scss/*.scss", "!" + src_folder + "/scss/_*.scss"],
		images: [src_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}", "!**/favicon.*"],
		fonts: src_folder + "/fonts/**/*.*",
		videos: src_folder + "/videos/**/*.*",
		audio: src_folder + "/audio/**/*.*",
	},
	watch: {
		html: src_folder + "/**/*.html",
		js: src_folder + "/**/*.js",
		css: src_folder + "/scss/**/*.scss",
		images: src_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: src_folder + "/fonts/**/*.*",
		videos: src_folder + "/videos/**/*.*",
		audio: src_folder + "/audio/**/*.*",
	},
	clean: "./" + project_name + "/",
};
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: "./" + project_name + "/",
		},
		browser: "default",
		notify: false,
		port: 3000,
	});
}
function html() {
	return src(path.src.html, {}).pipe(fileinclude()).pipe(dest(path.build.html)).pipe(browsersync.stream());
}
function css() {
	return src(path.src.css)
		.pipe(
			autoprefixer({
				grid: true,
				overrideBrowserslist: ["last 5 versions"],
				cascade: true,
			})
		)
		.pipe(scss({ outputStyle: "expanded" }))
		.pipe(group_media())
		.pipe(dest(path.build.css))
		.pipe(scss({ outputStyle: "compressed" }))
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());
}
function js() {
	return src(path.src.js, {})
		.pipe(fileinclude())
		.pipe(gulp.dest(path.build.js))
		.pipe(uglify(/* options */))
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
function images() {
	return src(path.src.images)
		.pipe(dest(path.build.images))
		.pipe(src(path.src.images))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 4, // 0 to 7
			})
		)
		.pipe(dest(path.build.images));
}
function fonts() {
	return src(path.src.fonts).pipe(dest(path.build.fonts));
}
function videos() {
	return src(path.src.videos).pipe(dest(path.build.videos));
}
function audio() {
	return src(path.src.audio).pipe(dest(path.build.audio));
}
function clean() {
	return del(path.clean);
}
function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.images], images);
}
let build = gulp.series(clean, gulp.parallel(html, css, js, images, videos, fonts, audio));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.js = js;
exports.videos = videos;
exports.audio = audio;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
