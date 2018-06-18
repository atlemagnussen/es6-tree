export default class EzCrumb {
    constructor(parentId, data) {
        this.selectedId = null;
        this.parentId = parentId;
        this.parentEl = document.getElementById(parentId);
        if (!this.parentEl) {
            throw new Error(`Can't find element with id ${parentId}`);
        }
        this.parentEl.classList.add("ez-crumb");
        if (!data || !Array.isArray(data) || data.length !== 1) {
            throw new Error(`data needs to be an array and with only 1 root element`);
        }
        this.data = data;
        this.appendRoot();
    }

    appendRoot() {
        let root = this.data[0];
        this.rootItem = this.createItem(root.id, root.name);
        this.parentEl.appendChild(this.rootItem);
    }

    createItem(id, text) {
        let item = document.createElement('span');
        let textItem = document.createElement('span');
        item.id = id;
        textItem.innerText = text;
        textItem.classList.add('item-text');
        item.classList.add('crumb-item');
        item.appendChild(textItem);
        return item;
    }

    select(id) {
        let tree = this.find(this.data[0], id);
        if (tree && Array.isArray(tree)) {
            this.parentEl.innerHTML = "";
            this.appendRoot();
            for(let i = 0; i<tree.length; i++) {
                let itemData = tree[i];
                let item = this.createItem(itemData.id, itemData.name);
                item.classList.add('icon-chevron-right');
                this.parentEl.appendChild(item);
            }
        }
    }

    find(root, id) {
        let found = [];
        if (root.children && Array.isArray(root.children) && root.children.length > 0) {
            let children = root.children;
            for (let i=0; i<children.length; i++) {
                let child = children[i];
                if (child.id === id) {
                    found.push(child);
                    return found;
                }
            }
            for (let i=0; i<children.length; i++) {
                let child = children[i];
                let grandChild = this.find(child, id);
                if (grandChild && Array.isArray(grandChild) && grandChild.length>0) {
                    found.push(child);
                    found.push(...grandChild);
                    return found;
                }
            }
        }
        return null;
    }
}
