import createElement from '../../DOM/createElement';

export default function createContentPage(mainContents) {
    for (let i = 0; i < mainContents.length; i += 1) {
        const headingContainer = createElement('div', 'heading');
        const heading = createElement(
            'h1',
            `${mainContents[i].className[1]}-heading`
        );
        const dueDate = createElement(
            'div',
            `${mainContents[i].className[1]}-date`,
            'dates'
        );

        heading.el.textContent = `${mainContents[i].className[1].replace(
            mainContents[i].className[1][0],
            mainContents[i].className[1][0].toUpperCase()
        )}`;
        dueDate.el.textContent = 'Due Date';

        const arrowUp = createElement('span', 'arrowup', 'arrow', 'hidden');
        const arrowDown = createElement('span', 'arrowdown', 'arrow');
        arrowUp.el.textContent = '▲';
        arrowDown.el.textContent = '▼';
        dueDate.el.appendChild(arrowDown.el);
        dueDate.el.appendChild(arrowUp.el);

        headingContainer.el.appendChild(heading.el);
        headingContainer.el.appendChild(dueDate.el);

        const ul = createElement(
            'ul',
            `${mainContents[i].className[1]}List`,
            'toDoUl'
        );
        const addTask = createElement('li', 'addToTask');
        const addTaskIcon = createElement('i', 'fas', 'fa-plus-circle');
        const addTaskText = createElement('p', 'addTaskText');
        addTaskText.el.textContent = 'Add Task';
        addTask.el.appendChild(addTaskIcon.el);
        addTask.el.appendChild(addTaskText.el);
        ul.el.appendChild(addTask.el);

        mainContents[i].el.appendChild(headingContainer.el);
        mainContents[i].el.appendChild(ul.el);
    }
}
