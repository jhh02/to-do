import { toDoObjectsArray } from '../arrays';
import createElement from '../DOM/createElement';

export default function clickAddTaskBtn() {
    const addTaskBtns = document.querySelectorAll('.addToTask');
    const uls = document.querySelectorAll('.toDoUl');

    function createToDoBox() {
        // Create ToDo Element
        const toDoList = createElement('li', 'toDoList');
        const toDoForm = createElement('form', 'toDoForm');
        const headingContainer = createElement('div', 'headingContainer');
        const headingCheckbox = createElement('input', 'checkbox');
        const heading = createElement('input', 'heading');
        const notes = createElement('textarea', 'textarea');
        const btnContainer = createElement('div', 'btnContainer');
        const dateBtn = createElement('p', 'dateBtn', 'toDoBtn');
        const tagBtn = createElement('label', 'tagBtn', 'toDoBtn');
        const checklistBtn = createElement('p', 'checklistBtn', 'toDoBtn');
        const priorityBtn = createElement('p', 'priorityBtn', 'toDoBtn');
        dateBtn.el.textContent = '📅';
        tagBtn.el.innerHTML = '🏷';
        checklistBtn.el.innerHTML = '✔️';
        priorityBtn.el.innerHTML = '🚩';
        headingCheckbox.el.type = 'checkbox';
        heading.el.placeholder = 'New To-Do';
        notes.el.placeholder = 'Notes';

        headingContainer.el.appendChild(headingCheckbox.el);
        headingContainer.el.appendChild(heading.el);
        toDoForm.el.appendChild(headingContainer.el);
        toDoForm.el.appendChild(notes.el);
        btnContainer.el.appendChild(dateBtn.el);
        btnContainer.el.appendChild(tagBtn.el);
        btnContainer.el.appendChild(checklistBtn.el);
        btnContainer.el.appendChild(priorityBtn.el);
        toDoForm.el.appendChild(btnContainer.el);
        toDoList.el.append(toDoForm.el);

        return toDoList;
    }

    function showTodoBox(e, todo) {
        uls.forEach((ul) => {
            if (ul.classList[0] === e.target.parentElement.classList[0]) {
                ul.appendChild(todo.el);
            }
        });
    }

    function hideTaskBar(e) {
        const addToTasks = document.querySelectorAll('.addToTask');
        addToTasks.forEach((addToTask) => {
            if (
                addToTask.parentElement.classList[0] ===
                e.target.parentElement.classList[0]
            ) {
                addToTask.style.display = 'none';
            }
        });
    }

    function addEventsToTodobox(todoBox) {
        const dateBtn = todoBox.querySelector('.dateBtn');
        const tagBtn = todoBox.querySelector('.tagBtn');
        const checklistBtn = todoBox.querySelector('.checklistBtn');
        const priorityBtn = todoBox.querySelector('.priorityBtn');

        //  Date event handlers
        dateBtn.addEventListener('click', (e) => {
            const dateElement = e.target;
            const dateInput = document.createElement('input');
            dateInput.type = 'date';
            dateElement.parentNode.insertBefore(dateInput, dateElement);
            dateElement.classList.add('hidden');
            console.log(dateInput.value);
            // 3.
        });

        // Tag event handlers
        tagBtn.addEventListener('click', (e) => {
            const tagElement = e.target;
            const tagInput = document.createElement('input');
            const tagDataList = document.createElement('datalist');
            tagInput.id = 'tags';
            tagInput.name = 'tags';
            tagDataList.id = 'tags';
            tagElement.parentNode.insertBefore(tagInput, tagElement);
            tagElement.parentNode.insertBefore(tagDataList, tagInput);
        });
    }

    function addToDo(e) {
        // 1. Hide taskbar
        hideTaskBar(e);
        // 2. Create To Do List box
        const todoBox = createToDoBox();
        // 3. Show To Do list box
        showTodoBox(e, todoBox);
        addEventsToTodobox(todoBox.el);
        // 4.
    }

    addTaskBtns.forEach((addTaskBtn) => {
        addTaskBtn.addEventListener('click', addToDo);
    });
}
