export const video = () => {
  return app.gulp
    .src(app.path.src.video)
    .pipe(app.plugins.if(app.isBuild, app.plugins.size({ title: 'FONTS', showFiles: true })))
    .pipe(app.gulp.dest(app.path.build.video));
};
