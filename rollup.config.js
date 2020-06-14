import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [
    {
        // input: 'src/es6tree.js',
        // output: {
        //     name: 'EsTree',
        //     file: 'dist/es6tree.js',
        //     format: 'iife'
        // },
        input: 'src/index.js',
        output: {
            name: 'EsTree',
            file: 'dist/bundle.js',
            format: 'iife'
        },
        plugins: [
            resolve({
                browser: true
            }),
            commonjs(),
            css({ output: 'dist/es6tree.css' }),
            copy({
                targets: [
                    { src: 'src/es6tree.js', dest: 'dist', rename: 'es6tree.esm.js' }
                ]
            }),

            !production && serve(),

            !production && livereload('dist'),

            production && terser()
        ]
    }
];
function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}