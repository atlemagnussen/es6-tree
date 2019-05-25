import EzTree from './es6tree.js';
import EzCrumb from './es6crumb.js';
import config from './config-example.js';
import data from './data-example.js';

class Index {
    constructor() {

        this.tree = new EzTree('eztree', config, data);
        this.tree.on('select', () => {
            console.log("from index.js");
            var test = document.getElementById("theview");
            test.innerHTML = "halloo";
        });

        this.crumb = new EzCrumb('ezcrumb', data);
        this.test = this.crumb.select('js-beginners');

        // Select a tree node from the outside
        let btnJs = document.getElementById("click-js");
        btnJs.addEventListener("click", () => {
            this.tree.select("js-beginners");
        });

        let btnHtml = document.getElementById("click-html");
        btnHtml.addEventListener("click", () => {
            this.tree.select("css-article");
        });

        // Act on tree node selection
    }
}

export default new Index();
