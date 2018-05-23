import { EzTree } from './eztree.js';


class Index {
    constructor() {
        console.log("Index init");

        var nodes = [{
            id: "master",
            name: "#",
            expanded: true,
            children: [
                {
                    id: "web-easy",
                    name: "Web Easy"
                },
                {
                    id: "web-medium",
                    name: "Web Medium"
                }
            ]
        }];

        var config = {
            types: {
                main: {
                    css: "icon octicon-pound"
                }
            }
        }
    }
}

export default new Index();
