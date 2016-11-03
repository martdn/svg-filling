'use strict';
/*
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 */
module.exports = {
    injectChanges: true,
    files: ['**/*.{html,htm,css,js}'],
    watchOptions: {
        ignored: 'node_modules'
    },
    server: {
        baseDir: [
            'demo/'
        ],
        routes: {
            '/lib': 'lib'
        }
    }
};