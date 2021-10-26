import { appendChild, createElement } from '../event/functions';

export default function createToDoList() {
    // * Make task list
    const todo = createElement('li', '', 'todolist');
    const titleWrapper = createElement('div', '', 'titleWrapper');
    const checkbox = createElement('input', '', 'checkbox');
    const title = createElement('div', '', 'title');
    const buttonWrapper = createElement('div', '', 'buttonWrapper');
    const dueDate = createElement('div', '', 'dueDate');
    const priority = createElement('div', '', 'priority');
    const deleteButton = createElement('button', 'delete', 'deleteButton');

    titleWrapper.el.style.cursor = 'pointer';
    checkbox.el.type = 'checkbox';

    appendChild(titleWrapper.el, checkbox.el, title.el);
    appendChild(buttonWrapper.el, deleteButton.el, priority.el, dueDate.el);
    appendChild(todo.el, titleWrapper.el, buttonWrapper.el);

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
