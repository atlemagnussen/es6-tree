import {
    EzTree
} from './eztree.js';


class Index {
    constructor() {
        console.log("Index init");

        var data = [{
                id: "master",
                name: "#",
                expanded: true,
                children: [{
                        id: "web-easy",
                        name: "Web Easy",
                        children: [{
                                id: "js-beginners",
                                name: "JS beginners"
                            },
                            {
                                id: "html-beginners",
                                name: "HTML beginners"
                            }
                        ]
                    },
                    {
                        id: "web-medium",
                        name: "Web Medium"
                    }
                ]
            },
            {
                id: "master2",
                name: "#2",
                expanded: true,
                children: [{
                        id: "web-easy2",
                        name: "Web Easy2"
                    },
                    {
                        id: "web-medium2",
                        name: "Web Medium2"
                    }
                ]
            }
        ];

        var config = {
            types: {
                main: {
                    css: "icon octicon-pound"
                }
            }
        }

        this.tree = new EzTree('eztree', config, data)
    }
}

export default new Index();
