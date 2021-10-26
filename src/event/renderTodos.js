import createToDoList from '../DOM/toDoTaskBar';

export default function renderToDos(taskbars, ToDo) {
    ToDo.todos.forEach((todo) => {
        const list = createToDoList();

        taskbars.appendChild(list);
    });
}
