# es6-tree
tree view for web with vanilla ES6 Javascript  
Using [Octicons](https://octicons.github.com/) from Github

<p>
<figure>
    <figcaption>Default</figcaption>
    <img alt="es6-tree example 1" src="https://storage.googleapis.com/atle-static/pics/es6-tree-example.jpg">
</figure>
<figure>
    <figcaption>Customized</figcaption>
    <img alt="es6-tree example 2" src="https://storage.googleapis.com/atle-static/pics/es6-tree-cus1.jpg">
</figure>
</p>

- Override styles easily
- Select event as node is clicked
- Select node from outside
- Supports anchor with href

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
import EsTree from 'es6tree';
const tree = new EsTree('tree-div', config, data);
```

### Config
You can pass `null` to use default config.  
Types will be mapped to the type in your data, customize their styles like this:
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
                    type: "file",
                    href: "/blog/1"
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

### Methods for interaction
#### select(id)
Select a node with code, will open all parent nodes as well
```js
tree.select("article-2");
```

#### open(id)
Open a node that has children with code
```js
tree.open("folder-1");
```

### Override styles
#### color on hover nodes
```css
.es6-tree summary:hover {
    background: purple;
}
```

#### color for selected node
```css
.es6-tree span[selected="true"]{
    background-color: red;
}
```

#### color on icon
```css
.es6-tree .node-text.icon-file::before {
    color: #e6d06c;
}
```

