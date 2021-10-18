import { format, compareAsc } from 'date-fns';
import {
    toDoObjectsArray,
    checkListObjectsArray,
    tagObjectsArray,
} from '../arrays';
import { createElement, appendChild } from '../DOM/functions';

export default function clickAddTaskBtn() {
    const addTaskBtns = document.querySelectorAll('.addToTaskBar');
    const uls = document.querySelectorAll('.toDoListContainer');
    const today = new Date();
    const formattedTodayDate = format(
        new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()),
        'yyyy-MM-dd'
    );

    function createToDoBox() {
        //* Create To Do Element
        const toDoList = createElement('li', 'toDoList');
        const headingContainer = createElement('div', 'headingContainers');
        const headingCheckbox = createElement('input', 'checkbox');
        const heading = createElement('input', 'heading');
        const notes = createElement('textarea', 'textarea');
        const btnContainer = createElement('div', 'btnContainer');
        const dateBtn = createElement('input', 'dateBtn', 'toDoBtn');
        const tagBtn = createElement('label', 'tagBtn', 'toDoBtn');
        const checklistBtn = createElement('p', 'checklistBtn', 'toDoBtn');
        const priorityBtn = createElement('p', 'priorityBtn', 'toDoBtn');
        const okBtn = createElement('button', 'okBtn');
        const cancelBtn = createElement('button', 'cancelBtn');
        okBtn.el.textContent = '✅';
        cancelBtn.el.textContent = '❌';
        dateBtn.el.type = 'date';
        dateBtn.el.value = formattedTodayDate;
        tagBtn.el.textContent = '🏷';
        checklistBtn.el.textContent = '📋';
        priorityBtn.el.textContent = '🚩';
        headingCheckbox.el.type = 'checkbox';
        heading.el.placeholder = 'New To-Do';
        notes.el.placeholder = 'Notes';

        appendChild(btnContainer.el, okBtn.el, cancelBtn.el);
        appendChild(headingContainer.el, headingCheckbox.el, heading.el);
        appendChild(toDoList.el, headingContainer.el, notes.el);
        appendChild(
            btnContainer.el,
            dateBtn.el,
            tagBtn.el,
            checklistBtn.el,
            priorityBtn.el
        );
        appendChild(toDoList.el, btnContainer.el);

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
        const titleCheckbox = todoBox.querySelector(`.checkbox`);
        const btnContainer = todoBox.querySelector('.btnContainer');
        const toDoTitle = todoBox.querySelector('.heading');
        const notesArea = todoBox.querySelector('.textarea');
        const dateBtn = todoBox.querySelector('.dateBtn');
        const tagBtn = todoBox.querySelector('.tagBtn');
        const checklistBtn = todoBox.querySelector('.checklistBtn');
        const priorityBtn = todoBox.querySelector('.priorityBtn');
        const okBtn = todoBox.querySelector('.okBtn');
        const cancelBtn = todoBox.querySelector('.cancelBtn');

        // * Checkbox check for todo changes
        titleCheckbox.addEventListener('change', (e) => {
            const checkedOn = e.target.checked;

            if (checkedOn) {
                e.target.nextSibling.style.pointerEvents = 'none';
                e.target.parentElement.nextSibling.style.pointerEvents = 'none';
                e.target.nextSibling.style.textDecoration = 'line-through';
                e.target.parentElement.nextSibling.style.textDecoration =
                    'line-through';
                e.target.nextSibling.style.color = 'grey';
                e.target.parentElement.nextSibling.style.color = 'grey';

                Array.from(
                    e.target.parentElement.parentElement.children
                ).forEach((el) => {
                    if (el.classList.contains('checkBoxChecklist')) {
                        Array.from(el.children).forEach((li) => {
                            console.log(li);
                            Array.from(li.children).forEach((span) => {
                                if (
                                    span.classList.contains(
                                        'checkBoxForCheckList'
                                    )
                                ) {
                                    span.checked = true;
                                }
                                if (span.classList.contains('spanText')) {
                                    console.log(li);
                                    span.style.textDecoration = 'line-through';
                                    span.style.color = 'grey';
                                }
                            });
                        });
                    }
                });
            } else {
                e.target.nextSibling.style.pointerEvents = 'auto';
                e.target.parentElement.nextSibling.style.pointerEvents = 'auto';
                e.target.nextSibling.style.textDecoration = 'none';
                e.target.parentElement.nextSibling.style.textDecoration =
                    'none';
                e.target.nextSibling.style.color = 'black';
                e.target.parentElement.nextSibling.style.color = 'black';
                Array.from(
                    e.target.parentElement.parentElement.children
                ).forEach((el) => {
                    if (el.classList.contains('checkBoxChecklist')) {
                        Array.from(el.children).forEach((li) => {
                            console.log(li);
                            Array.from(li.children).forEach((span) => {
                                if (
                                    span.classList.contains(
                                        'checkBoxForCheckList'
                                    )
                                ) {
                                    span.checked = false;
                                }
                                if (span.classList.contains('spanText')) {
                                    console.log(li);
                                    span.style.textDecoration = 'none';
                                    span.style.color = 'black';
                                }
                            });
                        });
                    }
                });
            }
        });

        // * Heading event handlers for user input
        toDoTitle.addEventListener('keypress', (toDoTitleEvent) => {
            if (toDoTitleEvent.key === 'Enter') {
                const headingValue = toDoTitle.value;
                toDoTitle.value = '';
                const toDoHeadginValue = createElement(
                    'span',
                    'toDoTitleValue'
                );

                // * Heading double click event for ediiting
                toDoHeadginValue.el.addEventListener(
                    'dblclick',
                    (dbclickEvent) => {
                        console.log(dbclickEvent.target);
                        dbclickEvent.target.nextSibling.value = headingValue;
                        dbclickEvent.target.nextSibling.classList.remove(
                            'hidden'
                        );
                        dbclickEvent.target.remove();
                    }
                );

                toDoHeadginValue.el.textContent = headingValue;
                toDoTitleEvent.target.parentElement.insertBefore(
                    toDoHeadginValue.el,
                    toDoTitle
                );
                toDoTitle.classList.add('hidden');
            }
        });

        // * Textarea event handlers for user input
        notesArea.addEventListener('keypress', (textareaEvent) => {
            if (textareaEvent.key === 'Enter') {
                const notesValue = notesArea.value;
                notesArea.value = '';
                const toDoNotesValue = createElement('p', 'toDoNotesValue');

                // * Textarea double click event for ediiting
                toDoNotesValue.el.addEventListener(
                    'dblclick',
                    (dbclickEvent) => {
                        dbclickEvent.target.nextSibling.value = notesValue;
                        dbclickEvent.target.nextSibling.classList.remove(
                            'hidden'
                        );
                        dbclickEvent.target.remove();
                    }
                );

                toDoNotesValue.el.textContent = notesValue;
                textareaEvent.target.parentElement.insertBefore(
                    toDoNotesValue.el,
                    notesArea
                );
                notesArea.classList.add('hidden');
            }
        });

        //* Get Date value
        dateBtn.addEventListener('click', (e) => {
            // TODO Get date values using date-fns
            const dateElement = e.target;
            console.log(dateElement.value);
        });

        //* Tag event handlers
        tagBtn.addEventListener('click', (tagEvent) => {
            // Check if tag array is empty
            // ! Change it to current object tag array later
            if (tagObjectsArray.length === 0) {
                const tagInput = createElement('input', 'tagInput');
                tagInput.el.type = 'text';
                tagInput.el.placeholder = 'Tags';
                tagEvent.target.parentElement.insertBefore(tagInput.el, tagBtn);
                tagBtn.classList.add('hidden');

                tagInput.el.addEventListener('keypress', (event) => {
                    if (event.key === 'Enter') {
                        const storedTag = event.target.value;
                        event.target.value = '';

                        // * Adding tags to tagContainer Array
                        tagObjectsArray.push(storedTag);
                        // TODO: store the tag to current object and global tag container
                        // TODO: Delete redundant tags in global tag container
                        tagBtn.classList.remove('hidden');
                        tagInput.el.remove();
                    }
                });
            }
            // ! Tag array is not empty
            // TODO: Make a drop down menu
            // TODO  Identify current Object type
            // TODO  Grab all tags from global tag container
            // TODO  Show all the tags on drop down menu
            // TODO If user selects the tag then push it to current object tag array
        });

        //* Checklist event handlers
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
            checkBoxTitle.el.placeholder = 'Write to do';
            checkBoxDeleteBtn.el.type = 'submit';
            checkBoxDeleteBtn.el.textContent = '🗑️';

            appendChild(
                checkListContainer.el,
                checkBoxForCheckList.el,
                checkBoxTitle.el,
                checkBoxDeleteBtn.el
            );
            if (
                !checklistEvent.target.parentElement.previousSibling.classList.contains(
                    'checkBoxChecklist'
                )
            ) {
                appendChild(checkLists.el, checkListContainer.el);
                checklistEvent.target.parentElement.parentElement.insertBefore(
                    checkLists.el,
                    checklistEvent.target.parentElement
                );
            } else {
                appendChild(
                    checklistEvent.target.parentElement.previousSibling,
                    checkListContainer.el
                );
            }

            // * Checkbox list Checkbox

            checkBoxForCheckList.el.addEventListener('change', (e) => {
                const checkedOn = e.target.checked;
                if (checkedOn) {
                    e.target.nextSibling.style.textDecoration = 'line-through';
                    e.target.nextSibling.style.color = 'grey';
                } else {
                    e.target.nextSibling.style.textDecoration = 'none';
                    e.target.nextSibling.style.color = 'black';
                }
            });

            // * Checkbox title event
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

            // * Checkbox delete event
            checkBoxDeleteBtn.el.addEventListener('click', (deleteEvent) => {
                deleteEvent.target.parentElement.remove();
                // 2. Remove list item from current Object.checklist[currentLocation]
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

        //* Priority event handlers
        // ? currentObject.priority[0-3]
        // ? currentObject.priority[0] = urgent and important
        // ? currentObject.priority[1] = urgent but not important
        // ? currentObject.priority[2] = not urgent but important
        // ? currentObject.priority[3] = not urgent and not important
        // todo 1.Create drop down menu
        // todo 2.Assign option values according to
        // todo 2.Create
        // 1. create drop down menu
        // 2. create 4 options buttons with value

        //* Confirm event handlers
        // 1. Save title value, textAreaValue,due date, priority, tags, checklists, checkbox, give id
        //  - create an todoObject and push to todoObject array
        // 2. give todo box an id. maybe random number
        // 3. create li
        // 3. create checkbox along with title, due date, priority, edit button, and trash button
        // 4. append elements into li and append li into ul

        // check if title is empty
        // check if date is empty
        // check if priority is selected

        //* Create li
        // create container for checkbox and title
        // create input for checkbox
        // create div for title
        // create container for the rest
        // create button for details
        // create div for date
        // create button to edit
        // create button for delete
        // insert list before add task bar

        //* Cancel event handlers
        // TODO: Identify todo box from todoObjectArray
        // TODO: Check if todo box object is empty
        // TODO: If not empty then
        // 1. Close todobox
        cancelBtn.addEventListener('click', (cancelEvent) => {
            // TODO: If empty then
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
