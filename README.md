# Es-tree
tree view for web with vanilla js  
Using [Octicons](https://octicons.github.com/) from Github

![es6-tree example](https://storage.googleapis.com/atle-static/pics/es6-tree-example.jpg)

## Dependencies
- none really
- use [static-server](https://www.npmjs.com/package/static-server) from `public` folder to test

## Usage
```html
<div id="tree-div"></div>
```
```js
import EsTree from './es6tree.js';
const tree = new EsTree('tree-div', config, data);
```

### Config
```js
const config = {
    types: {
        folder: {
            css: "icon icon-file-directory"
        },
        file: {
            css: "icon icon-file"
        }
    }
};
```
### Data
```js
const data = [{
    id: "master-node",
    name: "#",
    type: "main",
    expanded: true,
    children: [{
            id: "folder-1",
            expanded: true,
            type: "folder",
            name: "A folder",
            children: [{
                    id: "article-1",
                    name: "An article",
                    type: "file"
                },
                {
                    id: "article-2",
                    name: "Another article",
                    type: "file"
                }
            ]
        }]
}];
```