export default function sortDueDate() {
    const dueDateBtn = document.querySelector('.inbox-date');
    const arrowUp = document.querySelector('.arrowup');
    const arrowDown = document.querySelector('.arrowdown');

    dueDateBtn.addEventListener('click', (e) => {
        console.log(arrowDown.el);
        // Arrow Down Event
        arrowDown.classList.toggle('hidden');
        // 1. sort todo tasks from the past

        // Arrow Up Event
        arrowUp.classList.toggle('hidden');
        // 2. sort todo tasks from most recent dates
    });
}
