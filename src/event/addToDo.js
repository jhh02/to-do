import {
    addClassNames,
    removeClassNames,
    querySelector,
    appendChild,
} from './functions';
import createToDoForm from '../DOM/toDo';
import addEventsToDoForm from './toDoEvents';

export default function clickAddToDo() {
    const addToDo = querySelector('.addToTaskBar');
    const listContainer = querySelector('.toDoListContainer');
    function showToDoForm(e) {
        const toDoForm = createToDoForm();
        addEventsToDoForm(e, toDoForm, listContainer);
        removeClassNames(toDoForm.list.el, 'hidden');
        addClassNames(e.target.parentElement, 'hidden');
        appendChild(
            e.target.parentElement.parentElement.lastElementChild,
            toDoForm.list.el
        );

        // 3. Show To Do list box
        // 3. Push new todo to a todos obj
        // 4. Add todo on task list
        // 5. Push new todo to a todos obj
    }
    addToDo.el.addEventListener('click', (e) => showToDoForm(e));
}
