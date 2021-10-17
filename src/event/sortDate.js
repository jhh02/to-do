export default function sortDueDate() {
    const dueDateBtns = document.querySelectorAll('.dueDateText');
    const arrowUps = document.querySelectorAll('.arrowUp');
    const arrowDowns = document.querySelectorAll('.arrowDown');

    dueDateBtns.forEach((dueDateBtn) => {
        dueDateBtn.addEventListener('click', (e) => {
            for (let i = 0; i < arrowDowns.length; i += 1) {
                if (
                    dueDateBtn.parentElement === arrowDowns[i].parentElement &&
                    dueDateBtn.parentElement === arrowUps[i].parentElement
                ) {
                    arrowUps[i].classList.toggle('hidden');
                    arrowDowns[i].classList.toggle('hidden');
                }
            }
            //     // Arrow Down Event
            //     // 1. sort todo tasks from the past

            //     // Arrow Up Event
            //     // 2. sort todo tasks from most recent dates
            // }
        });
    });
}
