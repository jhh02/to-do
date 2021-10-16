export default function sortDueDate() {
    const dueDateBtns = document.querySelectorAll('.dates');
    const arrowUps = document.querySelectorAll('.arrowup');
    const arrowDowns = document.querySelectorAll('.arrowdown');

    dueDateBtns.forEach((dueDateBtn) => {
        dueDateBtn.addEventListener('click', (e) => {
            for (let i = 0; i < arrowDowns.length; i += 1) {
                if (
                    dueDateBtn.classList[0] ===
                        arrowDowns[i].parentElement.classList[0] &&
                    dueDateBtn.classList[0] ===
                        arrowUps[i].parentElement.classList[0]
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
