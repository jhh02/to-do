import {
    appendChild,
    createElement,
    addClassNames,
    removeClassNames,
} from '../DOM/functions';
import { todos } from '../DOM/objects';

export default function handleConfirm(e, todoObj) {
    //* Confirm event handlers
    // TODO Set required property to title, date, and priority later before completion.
    todos.push(todoObj);

    // 1. Make todo list
    const todo = createElement('li', '', 'todolist');
    const titleWrapper = createElement('div', '', 'titleWrapper');
    const checkbox = createElement('input', '', 'checkbox');
    const title = createElement('div', todoObj.title, 'title');
    const buttonWrapper = createElement('div', '', 'buttonWrapper');
    const dueDate = createElement('div', todoObj.dueDate, 'dueDate');
    const priority = createElement('div', todoObj.priority, 'priority');
    const editButton = createElement('button', 'edit', 'editButton');
    const deleteButton = createElement('button', 'delete', 'deleteButton');
    todo.el.setAttribute('id', todoObj.id);
    checkbox.el.type = 'checkbox';

    appendChild(titleWrapper.el, checkbox.el, title.el);
    appendChild(
        buttonWrapper.el,
        editButton.el,
        deleteButton.el,
        priority.el,
        dueDate.el
    );
    appendChild(todo.el, titleWrapper.el, buttonWrapper.el);

    removeClassNames(
        e.target.parentElement.parentElement.parentElement.children[1],
        'hidden'
    );

    e.target.parentElement.parentElement.parentElement.children[1].insertBefore(
        todo.el,
        e.target.parentElement.parentElement.parentElement.children[1].lastChild
            .previousSibling
    );
    // 3. Hide todobox -> DIV
    addClassNames(e.target.parentElement.parentElement, 'hidden');
    // 4. show tasks -> UL

    // Event handler button

    // ?Checkbox
    // make line through
    // ?Click on list itself
    // view detail - modal, show todobox, background is blur.
    // when clicked background or outside modal, close modal and show todo lists
    // ?edit buttonWrapper
    // show
    // ?delete button
    // remove todo list from display and remove it from todos array
    // find same object with todo obj id
}
