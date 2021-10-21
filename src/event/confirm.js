import {
    drawLineThroughDefault,
    unDrawLineThroughDefault,
    appendChild,
    createElement,
    addClassNames,
    removeClassNames,
} from './functions';
import Todo from '../DOM/toDoObject';
import createToDoList from '../DOM/toDoTaskBar';
import toggleHoverCard from './toggleHover';

export default function handleConfirm(e, todoObj, todoBox) {
    //* Confirm event handlers
    Todo.todos.push(todoObj);
    addClassNames(todoBox, 'hidden');
    const [, listContainer] = todoBox.parentElement.children;
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
    // TODO: view detail - modal, show todobox, background is blur.
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

    if (todoObj.notes || todoObj.subLists || todoObj.tags)
        toggleHoverCard(toDoList.titleWrapper.el, modalBox.el);

    // delete
    toDoList.buttonWrapper.el.addEventListener('click', () => {
        Todo.todos = Todo.todos.filter(
            (list) => list.id !== toDoList.todo.el.id
        );
        toDoList.todo.el.remove();
        Todo.removeTodo();
    });
    //  edit
    toDoList.title.el.addEventListener('click', () => {
        addClassNames(listContainer, 'hidden');
        removeClassNames(todoBox, 'hidden');
        Todo.todos = Todo.todos.filter(
            (list) => list.id !== toDoList.todo.el.id
        );
        toDoList.todo.el.remove();
    });
}
