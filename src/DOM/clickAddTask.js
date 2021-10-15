export default function clickAddTaskBtn() {
    const addTask = document.querySelector('.addToTask');

    function createToDoBox() {
        // Create to do object 
        const Todo = function (checked, heading, note, date, tag, checklist, priority){
            return {checked, heading, note, date, tag, checklist, priority}
        }


        // Create ToDo Box Elements
        const toDoBox = document.createElement('li');
        const toDoForm = document.createElement('form')
        const headingCheckbox = document.createElement('input');
        headingCheckbox.type = 'checkbox';
        const heading = document.createElement('input');
        const notes = document.createElement('textarea');
        const lowerBtnContainer = document.createElement('div');
        const dateBtn = document.createElement('i');
        const tagBtn = document.createElement('i');
        const checklistBtn = document.createElement('i');
        const priority = document.createElement('i');

        // Render image and placeholder from svg
                heading.placeholder = 'New To-Do';
                notes.placeholder = 'Notes';
                dateBtn.classList.add('far');
                dateBtn.classList.add('fa-calendar');
                tagBtn.classList.add('far');
                tagBtn.classList.add('fa-tags');
                checklistBtn.classList.add('fas');
                checklistBtn.classList.add('fa-tasks');
                priority.classList.add('far');
                priority.classList.add('fa-flag');

        // Checkbox event
        headingCheckbox.addEventListener('click', checkedList)
        // 1. Check if checkbox is checked
        // 2. If checkbox is checked
            // 3. Grab hedaing element and line through it
            // 4. Grab notes element and line through it
            // 5. Check if any checklist is listed
            // 6. Line through checklists
        // If check box is unchecked check
            // 3. Grab hedaing element and remove line through it
            // 4. Grab notes element and remove line through it
            // 5. Check if any checklist is listed
            // 6. Remove Line through on checklists

        // date event
        dateBtn.addEventListener('click', )
        // 1. When svg is clicked
        // 2. Show date 

        // checklist event

        // priority event


        // Crerate To Do Object
        // 1. 

        toDoForm.appendChild(headingCheckbox);
        toDoForm.appendChild(heading);
        toDoForm.appendChild(notes);
        toDoForm.appendChild(lowerBtnContainer);
        toDoForm.appendChild(dateBtn);
        toDoForm.appendChild(tagBtn);
        toDoForm.appendChild(checklistBtn);
        toDoForm.appendChild(priority);
        toDoBox.appendChild(toDoForm)

        return toDoBox;
    }

    function addToDos(todo) {}

    function hideaddTaskBar() {
        const addToTask = document.querySelector('.addToTask');
        addToTask.style.display = 'none';
    }

    function showToDoBox(e) {
        hideaddTaskBar();
        const todoBox = createToDoBox();
        addToDos(todoBox);
        document.querySelector('.inboxList').appendChild(todoBox);
    }

    addTask.addEventListener('click', showToDoBox);
}
