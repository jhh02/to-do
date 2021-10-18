function createElement(text, class1 = '', class2 = '', class3 = '') {
    const className = [];
    const el = document.createElement(text);
    if (class1) {
        el.classList.add(class1);
        className.push(class1);
    }
    if (class2) {
        el.classList.add(class2);
        className.push(class2);
    }
    if (class3) {
        el.classList.add(class3);
        className.push(class3);
    }
    return { el, className };
}

function appendChild(parent, child1, child2, child3, child4) {
    parent.appendChild(child1);
    if (child2) {
        parent.appendChild(child2);
    }
    if (child3) {
        parent.appendChild(child3);
    }
    if (child4) {
        parent.appendChild(child4);
    }

    return { parent };
}

export { createElement, appendChild };
