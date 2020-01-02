/*
 * Gulpfile.js orientation:
 * https://www.compony.io/docs/documentation/gulpfilejs-orientation
 *
 * Your project-specific configuration:
 * https://www.compony.io/docs/documentation/projectconfigjs
 */

module.exports = {
  gulpthemes: [
    {
      path: '',
      with_styleguide: false
    },
    // uncomment the following to enable it in multiple themes
    // {
    //   path: 'web/themes/custom/compony',
    //   with_styleguide: true
    // },
  ],
  features: {
    autoprefixer: {
      enable: true,
      options: {
        browsers: ['last 2 versions', 'ie 9', '> 0.2%'],
        cascade: false
      },
    },
    browserify: {
      enable: true,
      debug_mode: false,
      tinyify: {
        enable: true,
        options: {
          flat: false
        }
      }
    },
    clean_css: {
      enable: false,
    },
    css_mapping: {
      enable: false,
    },
    image_optimise: {
      enable: true,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3
      },
      optipng: {
        optimizationLevel: 5
      },
      jpegtran: {
        progressive: true
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false
          },
          {
            removeDimensions: true
          }
        ]
      }
    },
    sass_includes: {
      bourbon: false,
      bourbonNeat: false,
      breakpoint: false
    },
    uglify: {
      enable: true,
      options: {
        compress: {
          unused: false
        },
        mangle: false,
      }
    },
    // Deprecated
    kss: {
      enable: false,
    },
  },
};
