export default class EzTree {
    constructor(parentId, config, data) {
        this.selectedId = null;
        this.parentId = parentId;
        this.parentEl = document.getElementById(parentId);
        if (!this.parentEl) {
            throw new Error(`Can't find element with id ${parentId}`);
        }
        this.parentEl.classList.add('es6-tree');
        this.config = config ? config : {};
        this.data = data;
        this.on('select', (n) => { this.handleSelect(n.id); });
        this.append(this.parentEl, this.data);
    }

    append(p, data) {
        data.forEach((n) => {
            const d = document.createElement('details');
            if (n.expanded) {
                d.open = true;
            }
            p.appendChild(d);
            const s = document.createElement('summary');
            const span = document.createElement('span');
            if (n.id) {
                s.id = n.id;
                span.id = n.id;
            }
            span.innerText = n.name;
            span.classList.add('node-text');
            s.appendChild(span);
            this.handleType(n, span);
            d.appendChild(s);
            if (n.children && Array.isArray(n.children)) {
                this.append(d, n.children);
            } else {
                d.classList.add('leaf');
            }
        });
    }

    handleType(node, el) {
        if (node.type && this.config.types) {
            if (this.config.types.hasOwnProperty(node.type)) {
                const type = this.config.types[node.type];
                if (type.css) {
                    const classes = type.css.split(' ');
                    el.classList.add(...classes);
                }
            }
        } else if (node.children) {
            el.classList.add('icon', 'icon-file-directory');
        } else {
            el.classList.add('icon', 'icon-file');
        }
    }

    on(eventName, fn) {
        switch (eventName) {
        case 'select':
        {
            this.parentEl.addEventListener('click', (cev) => {
                if (cev.target.nodeName === 'SPAN') {
                    const id = cev.target.id;
                    const node = this.findNode(id);
                    if (node && node.id) {
                        fn(node);
                    } else {
                        fn({id});
                    }
                }
            });
            break;
        }
        default:
            console.error('Not supported event');
        }
    }

    select(id) {
        this.handleSelect(id);
        this.open(id);
    }

    open(id) {
        let node = document.getElementById(id);
        while (node.parentNode.nodeName === 'DETAILS') {
            node = node.parentNode;
            node.setAttribute('open', '');
        }
    }

    handleSelect(id) {
        if (!id) {
            return;
        }
        if (this.selectedId) {
            if (this.selectedId === id) {
                return;
            }
            const currentSelectedEl = this.parentEl.querySelector(`span#${this.selectedId}`);
            if (currentSelectedEl) {
                this.unsetSelected(currentSelectedEl);
            }
        }
        this.selectedId = id;
        const selectedEl = this.parentEl.querySelector(`span#${id}`);
        this.setSelected(selectedEl);
    }

    setSelected(el) {
        if (el)
            el.setAttribute('selected', 'true');
    }

    unsetSelected(el) {
        el.removeAttribute('selected');
    }

    findNode(id) {
        const itemPath = this.findPath({children: this.data}, id);

        if (!itemPath)
            return false;
        if (!Array.isArray(itemPath) || itemPath.length === 0)
            return false;

        const last = itemPath.pop();
        return last;
    }

    findPath(root, id) {
        const found = [];

        if (root.children && Array.isArray(root.children) && root.children.length > 0) {
            const children = root.children;

            for (let i = 0; i < children.length; i++) {
                const child = children[i];

                if (child.id === id) {
                    found.push(child);
                    return found;
                }
            }
            for (let i = 0; i < children.length; i++) {
                const child = children[i];
                const grandChild = this.findPath(child, id);

                if (grandChild && Array.isArray(grandChild) && grandChild.length > 0) {
                    found.push(child);
                    found.push(...grandChild);
                    return found;
                }
            }
        }
        return null;
    }
}
