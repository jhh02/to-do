import { format, compareAsc } from 'date-fns';
import {
    toDoObjectsArray,
    checkListObjectsArray,
    tagObjectsArray,
} from '../arrays';
import {
    createElement,
    appendChild,
    lineThrough,
    addClassNames,
    removeClassNames,
    querySelectorAll,
    querySelector,
} from '../DOM/functions';
import { dateNow, getYear, getMonth, getDay, today } from '../DOM/objects';

export default function clickAddTaskBtn() {
    const addTaskBtns = querySelectorAll('.addToTaskBar').el;
    const uls = querySelectorAll('.toDoListContainer').el;

    function createToDoBox() {
        //* Create To Do Element
        const toDoList = createElement('li', '', 'toDoList');
        const headingWrapper = createElement('div', '', 'headingContainers');
        const headingCheckbox = createElement('input', '', 'headingCheckbox');
        const headingTitle = createElement('input', '', 'headingTitle');
        const notes = createElement('textarea', '', 'textarea');
        const buttonsWrapper = createElement('div', '', 'buttonsWrapper');
        const dateBtn = createElement('input', '', 'dateBtn', 'toDoBtn');
        const tagBtn = createElement('label', '🏷', 'tagBtn', 'toDoBtn');
        const checkListBtn = createElement(
            'p',
            '📋',
            'checkListBtn',
            'toDoBtn'
        );
        const priorityBtn = createElement('p', '🚩', 'priorityBtn', 'toDoBtn');
        const confirmBtn = createElement('button', '✅', 'confirmBtn');
        const cancelBtn = createElement('button', '❌', 'cancelBtn');
        dateBtn.el.type = 'date';
        headingCheckbox.el.type = 'checkbox';
        dateBtn.el.value = today;
        headingTitle.el.placeholder = 'New To-Do';
        notes.el.placeholder = 'Notes';

        appendChild(headingWrapper.el, headingCheckbox.el, headingTitle.el);
        appendChild(
            buttonsWrapper.el,
            confirmBtn.el,
            cancelBtn.el,
            dateBtn.el,
            tagBtn.el,
            checkListBtn.el,
            priorityBtn.el
        );
        appendChild(
            toDoList.el,
            headingWrapper.el,
            notes.el,
            buttonsWrapper.el
        );

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
                addClassNames(addToTask, 'hidden');
        });
    }
    function addEventsToTodobox(todoBox) {
        const titleCheckbox = todoBox.querySelector(`.headingCheckbox`);
        const toDoTitle = todoBox.querySelector('.headingTitle');
        const notesArea = todoBox.querySelector('.textarea');
        const dateBtn = todoBox.querySelector('.dateBtn');
        const tagBtn = todoBox.querySelector('.tagBtn');
        const checkListBtn = todoBox.querySelector('.checkListBtn');
        const priorityBtn = todoBox.querySelector('.priorityBtn');
        const confirmBtn = todoBox.querySelector('.confirmBtn');
        const cancelBtn = todoBox.querySelector('.cancelBtn');

        // * To do checkbox handler
        titleCheckbox.addEventListener('change', (e) => {
            const checkedOn = e.target.checked;
            const toDoHeading = e.target.nextSibling;
            const textArea = e.target.parentElement.nextSibling;
            const checkList = e.target.parentElement;

            if (checkedOn) {
                lineThrough(toDoHeading, 'grey', 'line-through', 'none');
                lineThrough(textArea, 'grey', 'line-through', 'none');

                Array.from(checkList.children).forEach((el) => {
                    if (el.classList.contains('checkBoxChecklist')) {
                        Array.from(el.children).forEach((li) => {
                            Array.from(li.children).forEach((span) => {
                                if (
                                    span.classList.contains(
                                        'checkBoxForCheckList'
                                    )
                                )
                                    span.checked = true;

                                if (span.classList.contains('spanText')) {
                                    lineThrough(span, 'grey', 'line-through');
                                }
                            });
                        });
                    }
                });
            } else {
                lineThrough(toDoHeading, 'black', 'none', 'auto');
                lineThrough(textArea, 'black', 'none', 'auto');

                Array.from(checkList.children).forEach((el) => {
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
                                    lineThrough(span, 'black', 'none');
                                }
                            });
                        });
                    }
                });
            }
        });

        // * Todo title event handler
        toDoTitle.addEventListener('keypress', (toDoTitleEvent) => {
            if (toDoTitleEvent.key === 'Enter') {
                const headingValue = toDoTitle.value;
                toDoTitle.value = '';
                const toDoHeadginValue = createElement(
                    'span',
                    '',
                    'toDoTitleValue'
                );

                // * Todo title double click event handler
                toDoHeadginValue.el.addEventListener(
                    'dblclick',
                    (dbclickEvent) => {
                        dbclickEvent.target.nextSibling.value = headingValue;
                        removeClassNames(
                            dbclickEvent.target.nextSibling,
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
                addClassNames(toDoTitle, 'hidden');
            }
        });

        // * Textarea event handler (create notes)
        notesArea.addEventListener('keypress', (textareaEvent) => {
            if (textareaEvent.key === 'Enter') {
                const notesValue = notesArea.value;
                notesArea.value = '';
                const toDoNotesValue = createElement('p', '', 'toDoNotesValue');

                // * Textarea double click event handler (user edit)
                toDoNotesValue.el.addEventListener(
                    'dblclick',
                    (dbclickEvent) => {
                        dbclickEvent.target.nextSibling.value = notesValue;
                        removeClassNames(
                            dbclickEvent.target.nextSibling,
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
                addClassNames(notesArea, 'hidden');
            }
        });

        //* Grab selected due date
        dateBtn.addEventListener('click', (e) => {
            // TODO Get date values using date-fns
            const dueDateValue = e.target.value;
        });

        //* Tag event handlers
        tagBtn.addEventListener('click', (tagEvent) => {
            // * When current todo object has zero tag
            // ! Change it to currentObject.tagArray
            if (tagObjectsArray.length === 0) {
                const tagInput = createElement('input', '', 'tagInput');
                tagInput.el.type = 'text';
                tagInput.el.placeholder = 'Tags';
                tagEvent.target.parentElement.insertBefore(tagInput.el, tagBtn);
                addClassNames(tagBtn, 'hidden');

                tagInput.el.addEventListener('keypress', (event) => {
                    if (event.key === 'Enter') {
                        const storedTag = event.target.value;
                        event.target.value = '';

                        // * Adding tags to globalTagContainer Array
                        tagObjectsArray.push(storedTag);
                        // TODO: store tag to currentObject and globalTagArray DATA
                        // TODO: remove tags that are redundant in globalTagArray DATA
                        removeClassNames(tagBtn, 'hidden');
                        tagInput.el.remove();
                    }
                });
            }
            // * When currentObject already has tags
            // Let user view tags that have been used
            // TODO  Identify currentObject
            // TODO  Grab all the tags from globalTagArray
            // TODO: Make a drop down menu
            // TODO  Insert all the tags into drop down menu as options
            // TODO  Create an option that directs user to make a new tag
            // ? When user selects a new tag
            // TODO  Create new input element
            // TODO  User can type new tag
            // TODO  When user presses enter, hide new input element, push new tag to currentObject[tags] and to globalTagArray
            // TODO  If user selects the tag then push it to current object tag array
        });

        //* Checklist event handlers
        checkListBtn.addEventListener('click', (checklistEvent) => {
            const checkLists = createElement('ul', '', 'checkBoxChecklist');
            const checkListContainer = createElement(
                'li',
                '',
                'checkListContainer'
            );
            const checkBoxForCheckList = createElement(
                'input',
                '',
                'checkBoxForCheckList'
            );
            const checkBoxTitle = createElement('input', '', 'checkboxTitle');
            const checkBoxDeleteBtn = createElement(
                'button',
                '🗑️',
                'checkBoxDeleteBtn'
            );
            checkBoxTitle.el.type = 'text';
            checkBoxDeleteBtn.el.type = 'submit';
            checkBoxForCheckList.el.type = 'checkbox';
            checkBoxTitle.el.placeholder = 'Write to do';

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

            // * List Checkbox
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

            // * List title event
            checkBoxTitle.el.addEventListener('keypress', (checkBoxE) => {
                const checkListText = checkBoxE.target.value;
                if (checkBoxE.key === 'Enter' && checkListText) {
                    const textSpan = createElement(
                        'span',
                        checkListText,
                        'spanText'
                    );
                    checkBoxE.target.parentElement.insertBefore(
                        textSpan.el,
                        checkBoxE.target
                    );
                    addClassNames(checkBoxE.target, 'hidden');
                    // TODO - push the data to currObj[checklist].push(checklist)

                    // ! create recursion function
                    // TODO  When user presses enter key creates a new checklist below previous checklist.Input has enter key event attached
                }
            });

            // * Checkbox delete event
            checkBoxDeleteBtn.el.addEventListener('click', (deleteEvent) => {
                deleteEvent.target.parentElement.remove();
                // TODO  Remove list item from currentObject.checklist[currentLocation] DATA
            });
        });

        // TODO - Priority event handlers
        // ? currentObject.priority[0-3]
        // ? currentObject.priority[0] = urgent and important
        // ? currentObject.priority[1] = urgent but not important
        // ? currentObject.priority[2] = not urgent but important
        // ? currentObject.priority[3] = not urgent and not important
        // todo 1.Create drop down menu
        // todo 2 hide flag button
        // todo 3.Assign option values according to given options
        // todo 4 show values to user
        // todo 5 save selected value

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

        //* Create a new list for todoObject
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
        cancelBtn.addEventListener('click', (cancelEvent) => {
            // TODO: Identify todo box from todoObjectArray
            // TODO: Check if todo box object is empty
            // TODO: If not empty then

            // TODO: If empty then
            todoBox.remove();
            addTaskBtns.forEach((taskBtn) =>
                removeClassNames(taskBtn, 'hidden')
            );
        });
    }

    function addToDo(e) {
        // Create object class
        // 1. Hide taskbar
        hideTaskBar(e);
        // 2. Create To Do List box
        const todoBox = createToDoBox();
        // 3. Show To Do list box
        showTodoBox(e, todoBox);
        // 4. add todo box event
        addEventsToTodobox(todoBox.el);
        // 5. Assign values to new todo obj
        // 5. Create lists on ul
        // 6. Show list on ul
        // 7. Push todo Object to toDoObj arrays
    }

    addTaskBtns.forEach((addTaskBtn) => {
        addTaskBtn.addEventListener('click', addToDo);
    });
}
