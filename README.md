# es6-tree
tree view for web with vanilla ES6 Javascript  
Using [Octicons](https://octicons.github.com/) from Github

![es6-tree example](https://storage.googleapis.com/atle-static/pics/es6-tree-example.jpg)  

- Override styles easily
- Select event as node is clicked
- Select node from outside

## Dependencies
none
- use [static-server](https://www.npmjs.com/package/static-server) from `src` folder to test

## Usage
```html
<head>
    <link rel="stylesheet" href="/es6tree.css">
    <link rel="stylesheet" href="/icons/octicons.css">
</head>
<body>
    <div id="tree-div"></div>
</body>
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

### Events
#### On select
```js
tree.on("select", (n) => {
    console.log(`Node with id ${n.id} and type ${n.type} selected`);
});
```

#### Select from outside
```js
tree.select("article-2");
```
