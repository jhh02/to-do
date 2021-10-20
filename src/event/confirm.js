import {
    appendChild,
    createElement,
    addClassNames,
    removeClassNames,
} from '../DOM/functions';
import { todos } from '../DOM/objects';

export default function handleConfirm(e, todoObj) {
    //* Confirm event handlers
    // check if title is empty
    // check if date is empty
    // check if priority is selected
    todos.push(todoObj);

    // 1. Make todo list
    const todo = createElement('li', '', 'todolist');
    todo.el.setAttribute('id', todoObj.id);
    const titleWrapper = createElement('div', '', 'titleWrapper');
    const checkbox = createElement('input', '', 'checkbox');
    checkbox.el.type = 'checkbox';
    const title = createElement('div', todoObj.title, 'title');
    const buttonWrapper = createElement('div', '', 'buttonWrapper');
    const dueDate = createElement('div', todoObj.dueDate, 'dueDate');
    const priority = createElement('div', todoObj.priority, 'priority');
    const editButton = createElement('button', 'edit', 'editButton');
    const deleteButton = createElement('button', 'delete', 'deleteButton');

    // Event handler button
    // Checkbox
    // Click on list itself
    // edit buttonWrapper
    // delete button

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
    Array.from(
        e.target.parentElement.parentElement.parentElement.children
    )[1].insertBefore(
        todo.el,
        e.target.parentElement.parentElement.parentElement.children[1].lastChild
            .previousSibling
    );
    // 3. Hide todobox -> DIV
    addClassNames(e.target.parentElement.parentElement, 'hidden');
    // 4. show tasks -> UL

    //* Create a new list for todoObject
    // create another container
    // create button for details
    // create span to show date date
    // create button to edit
    // create button for delete
    // if user clicks the list, it shows the detail of todo obj, press esc to exi
    // insert list before add task bar
}
