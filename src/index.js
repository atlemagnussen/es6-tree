import EsTree from './es6tree.js';
const config = {
    types: {
        main: {
            css: 'icon icon-device-desktop'
        },
        folder: {
            css: 'icon icon-file-symlink-directory'
        },
        file: {
            css: 'icon icon-file'
        }
    }
};
const data = [{
    id: 'master',
    name: '#',
    type: 'main',
    expanded: true,
    children: [{
        id: 'web-easy',
        expanded: true,
        type: 'folder',
        name: 'Web Easy',
        children: [{
            id: 'js-beginners',
            name: 'JS beginners',
            type: 'file',
            href: '/blog/js-beginners'
        },
        {
            id: 'html-beginners',
            name: 'HTML beginners',
            type: 'file'
        }]
    },
    {
        id: 'web-medium',
        name: 'Web Medium',
        type: 'folder',
        children: [{
            id: 'web-components',
            name: 'Web components',
            type: 'file'
        },
        {
            id: 'css-article',
            name: 'CSS article',
            type: 'file'
        }]
    },
    {
        id: 'web-hard',
        name: 'Web Hard',
        type: 'folder',
        children: [{
            id: 'react',
            name: 'React course',
            type: 'file'
        },
        {
            id: 'angular',
            name: 'Angular course',
            type: 'file'
        }]
    }]
}];


class Index {
    constructor() {
        // View div for test output
        this.view = document.getElementById('view');

        // initialize tree
        this.tree = new EsTree('tree', config, data);

        // Act on tree node selection
        this.tree.on('select', (node) => {
            if (node.id) {
                this.view.innerHTML = `<p>Node with id <b>${node.id}</b> and type <b>${node.type}</b> selected</p>`;
            } else {
                this.view.innerHTML = '<p>Node with with no id selected</p>';
            }
        });

        // tree2
        const treeDiv2 = document.getElementById('tree2');
        const config2 = Object.assign({}, config);
        config2.types.file.css = 'icon icon-file-add';
        this.tree2 = new EsTree(treeDiv2, config2, data);

        // Select a tree node from the outside
        document.getElementById('btn1').addEventListener('click', () => {
            const id = 'css-article';
            this.tree.select(id);
            this.view.innerHTML = `<p>Node with id <b>${id}</b> selected from outside</p>`;
        });
    }
}

export default new Index();
