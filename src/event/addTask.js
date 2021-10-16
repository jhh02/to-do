import createElement from '../DOM/createElement';

export default function clickAddTaskBtn() {
    const addTask = document.querySelector('.addToTask');

    function createToDoBox() {
        // Create ToDo Element
        const toDoList = createElement('li');
        const toDoForm = createElement('form');
        const headingCheckbox = createElement('input');
        const heading = createElement('input');
        const notes = createElement('textarea');
        const btnContainer = createElement('div');
        const dateBtn = createElement('i', 'fa', 'fa-calendar');
        const tagBtn = createElement('i', 'fas', 'fa-tag');
        const checklistBtn = createElement('i', 'fas', 'fa-tasks');
        const priority = createElement('i', 'far', 'fa-flag');
        headingCheckbox.el.type = 'checkbox';
        heading.el.placeholder = 'New To-Do';
        notes.el.placeholder = 'Notes';

        // Date event handlers

        // Tag event handlers

        // Checklist event handlers

        // Priority event handlers

        toDoForm.el.appendChild(headingCheckbox.el);
        toDoForm.el.appendChild(heading.el);
        toDoForm.el.appendChild(notes.el);
        btnContainer.el.appendChild(dateBtn.el);
        btnContainer.el.appendChild(tagBtn.el);
        btnContainer.el.appendChild(checklistBtn.el);
        btnContainer.el.appendChild(priority.el);
        toDoForm.el.appendChild(btnContainer.el);
        toDoList.el.append(toDoForm.el);

        return toDoList;
    }

    function showTodoBox(todo) {
        document.querySelector('.inboxList').appendChild(todo.el);
    }

    function hideTaskBar() {
        const addToTask = document.querySelector('.addToTask');
        addToTask.style.display = 'none';
    }

    function addToDo(e) {
        // 1. Hide taskbar
        hideTaskBar();
        // 2. Create To Do List box
        // 3. Show To Do list box
        const todoBox = createToDoBox();
        // 4.
        showTodoBox(todoBox);
        // document.querySelector('.inboxList').appendChild(todoBox);
    }
    
    addTask.addEventListener('click', addToDo);
  
}
