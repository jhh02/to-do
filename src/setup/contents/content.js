import createContentsHeading from './content_heading';

export default function createContentPage() {
    for (let i = 0; i < createContentsHeading.length; i += 1) {
        const headingContainer = document.createElement('div');
        const heading = document.createElement('h1');
        const dueDate = document.createElement('div');
        const dueDateArrowDown = document.createElement('i');
        heading.textContent = `${createContentsHeading[i].classList[1].replace(
            createContentsHeading[i].classList[1][0],
            createContentsHeading[i].classList[1][0].toUpperCase()
        )}`;
        dueDate.textContent = 'Due Date';
        headingContainer.classList.add('heading');
        dueDateArrowDown.classList.add('fas');
        dueDateArrowDown.classList.add('fa-angle-down');
        dueDate.appendChild(dueDateArrowDown);
        headingContainer.appendChild(heading);
        headingContainer.appendChild(dueDate);

        const ul = document.createElement('ul');
        const addTask = document.createElement('li');
        const addTaskIcon = document.createElement('i');
        const addTaskText = document.createElement('p');
        addTaskIcon.classList.add('fas');
        addTaskIcon.classList.add('fa-plus-circle');
        addTaskText.textContent = 'Add Task';
        ul.classList.add(
            `${createContentsHeading[i].createContentsHeading[1]}List`
        );
        addTask.classList.add('addToTask');
        addTask.appendChild(addTaskIcon);
        addTask.appendChild(addTaskText);
        ul.appendChild(addTask);

        createContentsHeading[i].appendChild(headingContainer);
        createContentsHeading[i].appendChild(ul);
    }
}
