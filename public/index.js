import EzTree from './eztree.js';
import EzCrumb from './ezcrumb.js';

class Index {
    constructor() {
        console.log("Index init");

        var data = [{
                id: "master",
                name: "#",
                type: "main",
                expanded: true,
                children: [{
                        id: "web-easy",
                        expanded: true,
                        type: "folder",
                        name: "Web Easy",
                        children: [{
                                id: "js-beginners",
                                name: "JS beginners",
                                type: "file"
                            },
                            {
                                id: "html-beginners",
                                name: "HTML beginners",
                                type: "file"
                            }
                        ]
                    },
                    {
                        id: "web-medium",
                        name: "Web Medium",
                        type: "folder"
                    }
                ]
            }
        ];

        var config = {
            types: {
                folder: {
                    css: "icon icon-file-directory"
                },
                file: {
                    css: "icon icon-file"
                }
            }
        };

        this.tree = new EzTree('eztree', config, data);
        this.tree.on('select', () => {
            console.log("from index.js");
            var test = document.getElementById("theview");
            test.innerHTML = "halloo";
        });

        this.crumb = new EzCrumb('ezcrumb', data);
        this.test = this.crumb.select('js-beginners');

        let btnJs = document.getElementById("click-js");
        btnJs.addEventListener("click", () => {
            this.tree.select("js-beginners");
        });

        let btnHtml = document.getElementById("click-html");
        btnHtml.addEventListener("click", () => {
            this.tree.select("web-easy2");
        });
    }
}

export default new Index();
