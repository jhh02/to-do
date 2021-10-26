import { saveNewToDos, addClassNames, removeClassNames } from './functions';
import Todo from '../DOM/toDoObject';

export default function handleCancel(
    e,
    todoObj,
    todoBox,
    listContainer,
    toDoList
) {
    // Check if this is added to todos array
    if (toDoList.todo.el.id) {
        toDoList.title.el.textContent = todoObj.title;
        toDoList.dueDate.el.textContent = todoObj.dueDate;
        toDoList.priority.el.textContent = todoObj.priority;

        listContainer.insertBefore(
            toDoList.todo.el,
            listContainer.lastElementChild
        );

        removeClassNames(listContainer, 'hidden');
        addClassNames(todoBox, 'hidden');
    }

    removeClassNames(listContainer, 'hidden');
    addClassNames(todoBox, 'hidden');
}
