import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';

export default [
    {
        input: 'src/es6tree.js',
        output: {
            name: 'EsTree',
            file: 'dist/es6tree.js',
            format: 'iife'
        },
        plugins: [
            css({ output: 'dist/es6tree.css' }),
            copy({
                targets: [
                    { src: 'src/es6tree.js', dest: 'dist', rename: 'es6tree.esm.js' }
                ]
            })
        ]
    }
];