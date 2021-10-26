function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createElement(text, textContent = '', ...classNames) {
    const classes = [];
    const el = document.createElement(text);
    el.textContent = textContent;
    classNames.forEach((clname) => el.classList.add(clname));
    return { el, classes };
}

function appendChild(parent, ...children) {
    children.forEach((child) => parent.appendChild(child));
}

function drawLineThroughDefault(el) {
    el.style.color = 'grey';
    el.style.textDecoration = 'line-through';
    el.style.pointerEvents = 'none';
}

function unDrawLineThroughDefault(el) {
    el.style.color = 'black';
    el.style.textDecoration = 'none';
    el.style.pointerEvents = 'auto';
}

function lineThrough(el, color, lineValue, pointerValue) {
    el.style.color = color;
    el.style.textDecoration = lineValue;
    el.style.pointerEvents = pointerValue;
}

function removeClassNames(el, ...classNames) {
    classNames.forEach((className) => el.classList.remove(className));
}

function addClassNames(el, ...classNames) {
    classNames.forEach((className) => el.classList.add(className));
}

function querySelector(selector) {
    const el = document.querySelector(selector);
    return { el };
}

function querySelectorAll(selector) {
    const el = Array.from(document.querySelectorAll(selector));
    return { el };
}

function saveNewToDos(todoObject, task) {
    todoObject.todos = todoObject.todos.filter(
        (list) => list.id !== task.todo.el.id
    );
    task.todo.el.remove();
}

export {
    saveNewToDos,
    querySelectorAll,
    querySelector,
    createElement,
    appendChild,
    lineThrough,
    drawLineThroughDefault,
    unDrawLineThroughDefault,
    addClassNames,
    removeClassNames,
    removeAllChildNodes,
};
