const addTask = document.querySelector('.addToTask');

export function createToDoBox() {
    const toDoBox = document.createElement('li');
    const headingCheckbox = document.createElement('input');
    headingCheckbox.type = 'checkbox';
    const heading = document.createElement('input');
    const notes = document.createElement('textarea');
    const lowerBtnContainer = document.createElement('div');
    const dateBtn = document.createElement('i');
    const tagBtn = document.createElement('i');
    const checklistBtn = document.createElement('i');
    const priority = document.createElement('i');

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

    toDoBox.appendChild(headingCheckbox);
    toDoBox.appendChild(heading);
    toDoBox.appendChild(notes);
    toDoBox.appendChild(lowerBtnContainer);
    toDoBox.appendChild(dateBtn);
    toDoBox.appendChild(tagBtn);
    toDoBox.appendChild(checklistBtn);
    toDoBox.appendChild(priority);

    return toDoBox;
}

function addToDos(todo) {}

function hideaddTaskBar() {
    const addToTask = document.querySelector('.addToTask');
    addToTask.style.display = 'none';
}

export function showToDoBox(e) {
    hideaddTaskBar();
    const todoBox = createToDoBox();
    addToDos(todoBox);
    document.querySelector('.inboxList').appendChild(todoBox);
}

export function addTaskEvent() {
    addTask.addEventListener('click', showToDoBox);
}
