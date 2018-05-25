import {
    EzTree
} from './eztree.js';


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
            },
            {
                id: "master2",
                name: "#2",
                expanded: true,
                type: "main",
                children: [{
                        id: "web-easy2",
                        name: "Web Easy2",
                        type: "file"
                    },
                    {
                        id: "web-medium2",
                        name: "Web Medium2",
                        type: "file"
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
        }

        this.tree = new EzTree('eztree', config, data)
        this.tree.on('select', e => {
            console.log("from index.js");
        })
    }
}

export default new Index();
