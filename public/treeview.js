class Treeview {
    constructor(treeviewId, imageBaseUrl) {
        this.treeviewId = treeviewId;
        this.selected = null;
        this.imageBase = imageBaseUrl;
    };
    on(eventName, fn) {
        var me = this;
        switch (eventName) {
            case "select":
                {
                    document.querySelector(this.treeviewId).addEventListener("click", (event) => {
                        if (event.target.nodeName == 'SUMMARY') {
                            // if (me.selected != null) {
                            //     document.getElementById(me.selected).removeAttribute("selected");
                            // }
                            // document.getElementById(event.target.id).setAttribute("selected", "true");
                            console.log(event.target.id);
                            me.selected = event.target.id;
                            // event.target.setAttribute("open", !event.target.parentNode.hasAttribute("open"));
                            fn(event)
                        }
                    });
                    break;
                }
        }
    }
    appendData(data, targetId) {
        document.getElementById(targetId).parentNode.innerHTML += this.walkData(data);
    };
    replaceData(data, targetId) {
        if (targetId != null) {
            var target = document.getElementById(targetId);
            target.outerHTML = this.walkData(data)
        } else {
            var target = document.querySelector(this.treeviewId);
            target.innerHTML = this.walkData(data);
        }
    }

    walkData(data) {
        var me = this;
        var buf = Object.keys(data).map((key) => `
        <details>
        <summary id="${key}" ${Object.keys(data[key]).map((subkey)=>{return subkey != 'children'?`data-${subkey}="${data[key][subkey]}"`:' '}).join(' ')}>
        <img class="icon" src="${me.imageBase}${data[key].icon?data[key].icon:data[key].children?'Folder.png':'Item.png'}"> </img>
        ${data[key].label}
        </summary>
            ${data[key].children?me.walkData(data[key].children):""}</details>
        `);
        return buf.join("\n")
    }

    open(id) {
        // var node = document.getElementById(id);
        // while (node.parentNode.nodeName === "DETAILS") {
        //     node = node.parentNode;
        //     node.setAttribute("open", "true");
        // }
    }

    close(id) {
        // var node = document.getElementById(id).parentNode;
        // node.removeAttribute("open");
        // var detailNodes = node.querySelectorAll("DETAILS");
        // console.log(detailNodes);
        // detailNodes.forEach((node) => node.removeAttribute("open"));
    }

    select(id) {
        this.open(id);
        // document.getElementById(id).focus();
        // document.getElementById(id).click();
    }
}
