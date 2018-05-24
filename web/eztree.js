export class EzTree {
    constructor(parentId, config, data) {
        console.log('ez-tree');
        this.parentId = parentId;
        this.parentEl = document.getElementById(parentId);
        if (!this.parentEl) {
            throw new Error(`Can't find element with id ${parentId}`);
        }
        this.config = config;
        this.data = data;
        this.append(this.parentEl, this.data);
    }

    append(p, data) {
        data.forEach(n => {
            var d = document.createElement('details');
            p.appendChild(d);
            var s = document.createElement('summary');
            s.id = n.id;
            s.innerHTML = n.name;
            d.appendChild(s);
            if (n.children && Array.isArray(n.children)) {
                this.append(d, n.children);
            }
        })
    }
}
