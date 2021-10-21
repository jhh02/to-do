import {
    appendChild,
    createElement,
    removeClassNames,
} from '../event/functions';

export default function createToDoList(todoObj, listContainer) {
    // * Make task list
    const todo = createElement('li', '', 'todolist');
    const titleWrapper = createElement('div', '', 'titleWrapper');
    const checkbox = createElement('input', '', 'checkbox');
    const title = createElement('div', todoObj.title, 'title');
    const buttonWrapper = createElement('div', '', 'buttonWrapper');
    const dueDate = createElement('div', todoObj.dueDate, 'dueDate');
    const priority = createElement('div', todoObj.priority, 'priority');
    const deleteButton = createElement('button', 'delete', 'deleteButton');

    titleWrapper.el.style.cursor = 'pointer';
    todo.el.setAttribute('id', todoObj.id);
    checkbox.el.type = 'checkbox';

    appendChild(titleWrapper.el, checkbox.el, title.el);
    appendChild(buttonWrapper.el, deleteButton.el, priority.el, dueDate.el);
    appendChild(todo.el, titleWrapper.el, buttonWrapper.el);
    listContainer.insertBefore(todo.el, listContainer.lastElementChild);
    removeClassNames(listContainer, 'hidden');

    return {
        todo,
        titleWrapper,
        checkbox,
        title,
        buttonWrapper,
        dueDate,
        priority,
        deleteButton,
    };
}
