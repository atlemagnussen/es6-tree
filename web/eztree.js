export class EzTree {
    constructor(parentId, config, data) {
        this.selectedId = null;
        this.parentId = parentId;
        this.parentEl = document.getElementById(parentId);
        if (!this.parentEl) {
            throw new Error(`Can't find element with id ${parentId}`);
        }
        this.parentEl.classList.add("ez-tree");
        this.config = config;
        this.data = data;
        this.append(this.parentEl, this.data);
    }

    append(p, data) {
        data.forEach(n => {
            var d = document.createElement('details');
            if (n.expanded) {
                d.open = true;
            }
            p.appendChild(d);
            var s = document.createElement('summary');
            s.id = n.id;
            var span = document.createElement('span');
            span.id = n.id;
            span.innerText = n.name;
            s.appendChild(span);
            this.handleType(n, span);
            d.appendChild(s);
            if (n.children && Array.isArray(n.children)) {
                this.append(d, n.children);
            } else {
                d.classList.add("leaf");
            }
        });
    }

    handleType(node, el) {
        if (node.type && this.config.types) {
            if (this.config.types.hasOwnProperty(node.type)) {
                let type = this.config.types[node.type];
                if (type.css) {
                    let classes = type.css.split(' ');
                    el.classList.add(...classes);
                }
            }
        } else {
            if (node.children) {
                el.classList.add("icon", "icon-file-directory");
            }
        }
    }

    on(eventName, fn) {
        switch (eventName) {
            case "select":
                {
                    this.parentEl.addEventListener("click", (event) => {
                        console.log(`event.target.nodeName=${event.target.nodeName}`);
                        if (event.target.nodeName === 'SPAN') {
                            console.log(`event.target.id=${event.target.id}`);
                            this.handleSelected(event.target.id);
                            fn(event);
                        }
                    });
                    break;
                }
        }
    }

    handleSelected(id) {
        if (this.selectedId) {
            var currentSelectedEl = this.parentEl.querySelector(`summary#${this.selectedId}`);
            if (currentSelectedEl) {
                this.unsetSelected(currentSelectedEl);
            }
        }
        this.selectedId = id;
        var selectedEl = this.parentEl.querySelector(`summary#${id}`);
        this.setSelected(selectedEl);
    }

    setSelected(el) {
        el.setAttribute("selected", "true");
    }

    unsetSelected(el) {
        el.removeAttribute("selected");
    }
}
