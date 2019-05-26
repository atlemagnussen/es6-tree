import EsTree from './es6tree.js';
import config from './config-example.js';
import data from './data-example.js';

class Index {
    constructor() {
        // View div for test output
        this.view = document.getElementById('view');

        // initialize tree
        this.tree = new EsTree('tree-div', config, data);

        // Act on tree node selection
        this.tree.on('select', (node) => {
            if (node.id) {
                this.view.innerHTML = `<p>Node with id <b>${node.id}</b> and type <b>${node.type}</b> selected</p>`;
            } else {
                this.view.innerHTML = '<p>Node with with no id selected</p>';
            }
        });

        // Select a tree node from the outside
        document.getElementById('btn1').addEventListener('click', () => {
            const id = 'css-article';
            this.tree.select(id);
            this.view.innerHTML = `<p>Node with id <b>${id}</b> selected from outside</p>`;
        });
    }
}

export default new Index();
