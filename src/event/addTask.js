import { toDoObjectsArray, checkListObjectsArray } from '../arrays';
import createElement from '../DOM/createElement';

export default function clickAddTaskBtn() {
    const addTaskBtns = document.querySelectorAll('.addToTaskBar');
    const uls = document.querySelectorAll('.toDoListContainer');

    function createToDoBox() {
        // Create ToDo Element
        const toDoList = createElement('li', 'toDoList');
        const headingContainer = createElement('div', 'headingContainers');
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
            if (ul === e.target.parentElement)
                ul.insertBefore(todo.el, ul.lastChild);
        });
    }

    function hideTaskBar(e) {
        addTaskBtns.forEach((addToTask) => {
            if (
                addToTask.parentElement.parentElement ===
                e.target.parentElement.parentElement
            )
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
                const headingValue = toDoTitle.value;
                toDoTitle.value = '';

                // Hide input element
                // Make span element and insert it where input element was
            }
        });

        // Heading mouseover event
        // When mouse over span element
        // hide span
        // show input element with title value

        // Heading mouseout event
        // When mouse is out
        // hide innput element
        // show span

        // Textarea event handlers
        notesArea.addEventListener('keypress', (textareaEvent) => {
            if (textareaEvent.key === 'Enter') {
                const noteValue = notesArea.value;
                notesArea.value = '';
                console.log(noteValue);
            }
        });

        // Heading mouseover event
        // When mouse over span element
        // hide span
        // show show text with text value

        // Heading mouseout event
        // When mouse is out
        // hide text  element
        // show span

        //  Date event handlers
        dateBtn.addEventListener('click', (e) => {
            const dateElement = e.target;
            const dateInput = createElement('input', 'calendar-date');
            dateInput.el.type = 'date';
            dateElement.parentNode.insertBefore(dateInput.el, dateElement);
            dateElement.classList.add('hidden');

            // 3.
        });

        // Tag event handlers
        tagBtn.addEventListener('click', (e) => {
            // Check if tag array is empty
            // if empty then
            // Create input type text field
            // when user press enter
            // store text input value
            // push it to tagsArray
            // if tag array is not empty then
            // make a drop down menu
            // get all tags from tag array
            // show it on the drop down menu
            // if user choose a certain tag
            // save it on todoObject.tag
        });

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

        // Heading mouseover event
        // When mouse over span element
        // hide span
        // show input element with title value

        // Heading mouseout event
        // When mouse is out
        // hide innput element
        // show span

        // push the data to checklist array

        // create delete button event handlers
        // 1. delete the element from checklist

        // Priority event handlers
        // 1. create drop down menu
        // 2. create 4 options buttons with value

        // Confirm event handlers
        // 1. Save title value, textAreaValue,due date, priority, tags, checklists, checkbox, give id
        //  - create an todoObject and push to todoObject array
        // 2. give todo box an id. maybe random number
        // 3. create li
        // 3. create checkbox along with title, due date, priority, edit button, and trash button
        // 4. append elements into li and append li into ul

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
            todoBox.remove();
            addTaskBtns.forEach((taskBtn) =>
                taskBtn.classList.remove('hidden')
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
        // 4. add etodo box event
        addEventsToTodobox(todoBox.el);
        // 5. Create lists on ul
        // 6. Show list on ul
        // 7. Push todo Object to todoobj arrays
    }

    addTaskBtns.forEach((addTaskBtn) => {
        addTaskBtn.addEventListener('click', addToDo);
    });
}
