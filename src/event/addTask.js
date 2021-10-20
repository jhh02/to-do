import { addClassNames, querySelectorAll, appendChild } from '../DOM/functions';
import addEventsToTodobox from './toDoBoxEvents';
import createToDo from './createToDo';

export default function clickAddTaskBtn() {
    const addToTaskBars = querySelectorAll('.addToTaskBar').el;

    function addToDo(e) {
        // 1. Hide taskbar
        addClassNames(e.target.parentElement, 'hidden');
        // 2. Create To Do List box
        const TODO = createToDo();
        // 3. Show To Do list box
        addEventsToTodobox(TODO);
        // 4. Add todo information on task list
        appendChild(e.target.parentElement.parentElement, TODO.list.el);
        // 5. Push new todo to a todos obj
    }

    addToTaskBars.forEach((addTaskBtn) => {
        addTaskBtn.addEventListener('click', addToDo);
    });
}
