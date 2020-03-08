import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';

export default [
    {
        external: ['octicons'],
        input: 'src/es6tree.js',
        output: {
            name: 'EsTree',
            file: 'dist/es6tree.js',
            format: 'iife',
            globals: {
                'octicons': 'octicons'
            }
        },
        plugins: [
            css({ output: 'dist/es6tree.css' }),
            resolve({
                browser: true,
            }),
            commonjs()
        ]
    }
];