import { removeAllChildNodes } from './functions';

export default function sortDueDate() {
    const dueDateBtn = document.querySelector('.dueDateText');
    const arrowUps = document.querySelector('.arrowUp');
    const arrowDowns = document.querySelector('.arrowDown');
    const listContainer = document.querySelector('.toDoListContainer');

    dueDateBtn.addEventListener('click', (e) => {
        if (
            dueDateBtn.parentElement === arrowDowns.parentElement &&
            dueDateBtn.parentElement === arrowUps.parentElement
        ) {
            arrowUps.classList.toggle('hidden');
            arrowDowns.classList.toggle('hidden');
        }
        // Arrow Down Event
        // 1. sort todo tasks from the past
        if (arrowUps.classList.contains('hidden')) {
            const sortedFromPrevious = Array.from(listContainer.children)
                .filter((list) => list.classList.contains('todolist'))
                .sort(
                    (a, b) =>
                        new Date(a.dataset.date) - new Date(b.dataset.date)
                );
            Array.from(listContainer.children).forEach((li) => {
                if (li.classList.contains('todolist')) li.remove();
            });
            sortedFromPrevious.forEach((li) =>
                listContainer.insertBefore(li, listContainer.lastElementChild)
            );
        } else {
            const sortedFromLatest = Array.from(listContainer.children)
                .filter((list) => list.classList.contains('todolist'))
                .sort(
                    (a, b) =>
                        new Date(b.dataset.date) - new Date(a.dataset.date)
                );
            Array.from(listContainer.children).forEach((li) => {
                if (li.classList.contains('todolist')) li.remove();
            });
            sortedFromLatest.forEach((li) =>
                listContainer.insertBefore(li, listContainer.lastElementChild)
            );
        }
    });
}
