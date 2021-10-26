import {
    drawLineThroughDefault,
    unDrawLineThroughDefault,
    addClassNames,
    removeClassNames,
    saveNewToDos,
} from './functions';
import Todo from '../DOM/toDoObject';
import toggleHoverCard from './toggleHover';
import makeHoverCardBox from '../DOM/hoverCardBox';

export default function handleConfirm(
    e,
    todoObj,
    todoBox,
    listContainer,
    toDoList
) {
    Todo.todos.push(todoObj);
    toDoList.todo.el.dataset.date = todoObj.dueDate;
    toDoList.title.el.textContent = todoObj.title;
    toDoList.dueDate.el.textContent = todoObj.dueDate;
    toDoList.priority.el.textContent = todoObj.priority;
    toDoList.todo.el.setAttribute('id', todoObj.id);
    todoBox.id = todoObj.id;
    todoBox.dataset.date = todoObj.dueDate;

    listContainer.insertBefore(
        toDoList.todo.el,
        listContainer.lastElementChild
    );
    removeClassNames(listContainer, 'hidden');
    addClassNames(todoBox, 'hidden');
    // TODO Set required property to title, date, and priority later before completion.
    // Event handler button
    toDoList.checkbox.el.addEventListener('change', (checkboxE) => {
        if (checkboxE.target.checked) {
            drawLineThroughDefault(toDoList.title.el);
            drawLineThroughDefault(toDoList.buttonWrapper.el);
        } else {
            unDrawLineThroughDefault(toDoList.title.el);
            unDrawLineThroughDefault(toDoList.buttonWrapper.el);
        }
    });

    if (
        toDoList.todo.el.firstElementChild.nextSibling.classList.contains(
            'modal'
        )
    ) {
        toDoList.todo.el.firstElementChild.nextSibling.remove();
    }

    // TODO:Style with tailwind
    // TODO: view detail - modal, show todobox, background is blur.

    const hoverBox = makeHoverCardBox(todoObj, toDoList);

    if (todoObj.notes || todoObj.subLists || todoObj.tags)
        toggleHoverCard(toDoList.titleWrapper.el, hoverBox.modalBox.el);

    // delete
    toDoList.buttonWrapper.el.addEventListener('click', () => {
        saveNewToDos(Todo, toDoList);
        Todo.removeTodo();
    });
    //  edit
    toDoList.title.el.addEventListener('click', () => {
        addClassNames(listContainer, 'hidden');
        removeClassNames(todoBox, 'hidden');
        saveNewToDos(Todo, toDoList);
    });
}
