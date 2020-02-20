import copy from 'rollup-plugin-copy';

export default [
    {
        input: 'src/es6tree.js',
        output: {
            name: 'EsTree',
            file: 'dist/es6tree.js',
            format: 'iife'
        },
        plugins: [
            copy({
                targets: [
                    { src: 'src/es6tree.js', dest: 'dist/es6tree.esm.js' }
                ]
            })
        ]
    }
];