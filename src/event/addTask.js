import { toDoObjectsArray, checkListObjectsArray } from '../arrays';
import createElement from '../DOM/createElement';

export default function clickAddTaskBtn() {
    const addTaskBtns = document.querySelectorAll('.addToTask');
    const uls = document.querySelectorAll('.toDoUl');

    function createToDoBox() {
        // Create ToDo Element
        const toDoList = createElement('li', 'toDoList');
        const headingContainer = createElement('div', 'headingContainer');
        const headingCheckbox = createElement('input', 'checkbox');
        const heading = createElement('input', 'heading');
        const notes = createElement('textarea', 'textarea');
        const btnContainer = createElement('div', 'btnContainer');
        const dateBtn = createElement('p', 'dateBtn', 'toDoBtn');
        const tagBtn = createElement('label', 'tagBtn', 'toDoBtn');
        const checklistBtn = createElement('p', 'checklistBtn', 'toDoBtn');
        const priorityBtn = createElement('p', 'priorityBtn', 'toDoBtn');
        const okBtn = createElement('button', 'okBtn');
        const cancelBtn = createElement('button', 'cancelBtn');
        okBtn.el.textContent = '✅';
        cancelBtn.el.textContent = '❌';
        dateBtn.el.textContent = '📅';
        tagBtn.el.textContent = '🏷';
        checklistBtn.el.textContent = '📋';
        priorityBtn.el.textContent = '🚩';
        headingCheckbox.el.type = 'checkbox';
        heading.el.placeholder = 'New To-Do';
        notes.el.placeholder = 'Notes';

        btnContainer.el.appendChild(okBtn.el);
        btnContainer.el.appendChild(cancelBtn.el);
        headingContainer.el.appendChild(headingCheckbox.el);
        headingContainer.el.appendChild(heading.el);
        toDoList.el.appendChild(headingContainer.el);
        toDoList.el.appendChild(notes.el);
        btnContainer.el.appendChild(dateBtn.el);
        btnContainer.el.appendChild(tagBtn.el);
        btnContainer.el.appendChild(checklistBtn.el);
        btnContainer.el.appendChild(priorityBtn.el);
        toDoList.el.appendChild(btnContainer.el);

        return toDoList;
    }

    function showTodoBox(e, todo) {
        uls.forEach((ul) => {
            console.log(ul);
            // if (ul.classList[0] === e.target.parentElement.classList[0])
            ul.appendChild(todo.el);
        });
    }

    function hideTaskBar(e) {
        const addToTasks = document.querySelectorAll('.addToTask');
        addToTasks.forEach((addToTask) => {
            // if (
            //     addToTask.parentElement.classList[0] ===
            //     e.target.parentElement.classList[0]
            // )
            addToTask.classList.add('hidden');
        });
    }

    function addEventsToTodobox(todoBox) {
        const toDoTitle = todoBox.querySelector('.heading');
        const notesArea = todoBox.querySelector('.textarea');
        const dateBtn = todoBox.querySelector('.dateBtn');
        const tagBtn = todoBox.querySelector('.tagBtn');
        const checklistBtn = todoBox.querySelector('.checklistBtn');
        const priorityBtn = todoBox.querySelector('.priorityBtn');
        const okBtn = todoBox.querySelector('.okBtn');
        const cancelBtn = todoBox.querySelector('.cancelBtn');

        // Heading event handlers
        toDoTitle.addEventListener('keypress', (toDoTitleEvent) => {
            if (toDoTitleEvent.key === 'Enter') {
                toDoTitleEvent.preventDefault();
            }
        });

        // Textarea event handlers
        notesArea.addEventListener('keypress', (textareaEvent) => {
            if (textareaEvent.key === 'Enter') {
                textareaEvent.preventDefault();
            }
        });

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
        tagBtn.addEventListener('click', (e) => {});

        // Checklist event handlers
        checklistBtn.addEventListener('click', (checklistEvent) => {
            const checkLists = createElement('ul', 'checkBoxChecklist');
            const checkListContainer = createElement(
                'li',
                'checkListContainer'
            );
            const checkBoxForCheckList = createElement(
                'input',
                'checkBoxForCheckList'
            );
            const checkBoxTitle = createElement('input', 'checkboxTitle');
            const checkBoxDeleteBtn = createElement(
                'button',
                'checkBoxDeleteBtn'
            );
            checkBoxForCheckList.el.type = 'checkbox';
            checkBoxTitle.el.type = 'text';
            checkBoxDeleteBtn.el.type = 'submit';
            checkBoxDeleteBtn.el.textContent = '🗑️';

            checkListContainer.el.appendChild(checkBoxForCheckList.el);
            checkListContainer.el.appendChild(checkBoxTitle.el);
            checkListContainer.el.appendChild(checkBoxDeleteBtn.el);
            checkLists.el.appendChild(checkListContainer.el);
            checklistEvent.target.parentElement.parentElement.insertBefore(
                checkLists.el,
                checklistEvent.target.parentElement
            );

            checkBoxTitle.el.addEventListener('keypress', (checkBoxE) => {
                const checkListText = checkBoxE.target.value;
                if (checkBoxE.key === 'Enter' && checkListText) {
                    const textSpan = createElement('span', 'spanText');
                    textSpan.el.textContent = checkListText;
                    checkBoxE.target.parentElement.insertBefore(
                        textSpan.el,
                        checkBoxE.target
                    );
                    checkBoxE.target.classList.add('hidden');
                    checkListObjectsArray.push(checkListText);
                }
            });
        });
        // create text input event handler(when user clicks enter)
        // 3. push the data to checklist array

        // create delete button event handlers
        // 1. delete from the page
        // 2. remove it from checklist array

        // Priority event handlers

        // Confirm event handlers

        // check if title is empty
        // check if date is empty
        // check if priority is selected

        // Create li
        // create container for checkbox and title
        // create input for checkbox
        // create div for title
        // create container for the rest
        // create button for details
        // create div for date
        // create button to edit
        // create button for delete
        // insert list before add task bar

        // Cancel event handlers
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            todoBox.classList.toggle('hidden');
            // console.log(todoBox);
            addTaskBtns.forEach((taskBtn) =>
                taskBtn.classList.toggle('hidden')
            );
        });
    }

    function addToDo(e) {
        // 1. Hide taskbar
        hideTaskBar(e);
        // 2. Create To Do List box
        const todoBox = createToDoBox();
        // 3. Show To Do list box
        showTodoBox(e, todoBox);
        // 4. add cancel event
        addEventsToTodobox(todoBox.el);
        // 4.
    }

    addTaskBtns.forEach((addTaskBtn) => {
        addTaskBtn.addEventListener('click', addToDo);
    });
}
