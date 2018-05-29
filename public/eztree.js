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
        this.on("select", (e) => { this.handleSelect(e.target.id); });
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
            } else {
                el.classList.add("icon", "icon-file");
            }
        }
    }

    on(eventName, fn) {
        switch (eventName) {
            case "select":
                {
                    this.parentEl.addEventListener("click", (event) => {
                        if (event.target.nodeName === 'SPAN') {
                            fn(event);
                        }
                    });
                    break;
                }
        }
    }

    select(id) {
        this.handleSelect(id);
        this.open(id);
    }

    open(id) {
        var node = document.getElementById(id);
        while (node.parentNode.nodeName === "DETAILS") {
            node = node.parentNode;
            node.setAttribute("open", "");
        }
    }

    handleSelect(id) {
        if (this.selectedId) {
            if (this.selectedId === id) {
                return;
            }
            var currentSelectedEl = this.parentEl.querySelector(`span#${this.selectedId}`);
            if (currentSelectedEl) {
                this.unsetSelected(currentSelectedEl);
            }
        }
        this.selectedId = id;
        var selectedEl = this.parentEl.querySelector(`span#${id}`);
        this.setSelected(selectedEl);
    }

    setSelected(el) {
        el.setAttribute("selected", "true");
    }

    unsetSelected(el) {
        el.removeAttribute("selected");
    }
}
