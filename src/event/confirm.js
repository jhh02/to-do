import {
    drawLineThroughDefault,
    unDrawLineThroughDefault,
    appendChild,
    createElement,
    addClassNames,
    removeClassNames,
    removeAllChildNodes,
} from '../DOM/functions';

import Todo from '../DOM/objects';
import createToDoList from './toDoListBar';

export default function handleConfirm(e, todoObj, todoBox) {
    //* Confirm event handlers
    const [, listContainer] = todoBox.parentElement.children;
    addClassNames(todoBox, 'hidden');
    Todo.todos.push(todoObj);
    const toDoList = createToDoList(todoObj, listContainer);

    // TODO Set required property to title, date, and priority later before completion.

    // Event handler button
    toDoList.checkbox.el.addEventListener('change', (checkboxE) => {
        const checkedOn = checkboxE.target.checked;
        if (checkedOn) {
            drawLineThroughDefault(toDoList.title.el);
            drawLineThroughDefault(toDoList.buttonWrapper.el);
        } else {
            unDrawLineThroughDefault(toDoList.title.el);
            unDrawLineThroughDefault(toDoList.buttonWrapper.el);
        }
    });

    // TODO:Style with tailwind
    const modalBox = createElement('div', '', 'modal', 'hidden');
    const modalContent = createElement('div', '', 'modal-content');
    const notes = createElement('div', `Note: ${todoObj.notes}`, 'notes');
    const subLists = createElement(
        'div',
        `List: ${todoObj.subLists}`,
        'subLists'
    );
    const tags = createElement('div', `Tags: ${todoObj.tags}`, 'tags');
    appendChild(modalContent.el, notes.el, subLists.el, tags.el);
    appendChild(modalBox.el, modalContent.el);
    toDoList.todo.el.insertBefore(modalBox.el, toDoList.buttonWrapper.el);

    // // ?Show brief detail when the list is on hover
    if (todoObj.notes || todoObj.subLists || todoObj.tags) {
        toDoList.titleWrapper.el.addEventListener('mouseover', (event) => {
            removeClassNames(modalBox.el, 'hidden');
        });

        toDoList.titleWrapper.el.addEventListener('mouseout', (event) => {
            addClassNames(modalBox.el, 'hidden');
            // close modal box
        });
    }

    // TODO: view detail - modal, show todobox, background is blur.

    // delete
    toDoList.buttonWrapper.el.addEventListener('click', (eventBtn) => {
        Todo.todos = Todo.todos.filter(
            (list) => list.id !== toDoList.todo.el.id
        );
        Todo.removeTodo();
        toDoList.todo.el.remove();
    });
    //  edit
    toDoList.title.el.addEventListener('click', (deleteEvent) => {
        addClassNames(listContainer, 'hidden');
        removeClassNames(todoBox, 'hidden');
        Todo.todos = Todo.todos.filter(
            (list) => list.id !== toDoList.todo.el.id
        );
        toDoList.todo.el.remove();
    });
}
