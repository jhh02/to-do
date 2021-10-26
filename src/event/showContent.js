import { format, differenceInWeeks } from 'date-fns';

export default function showContent(contentTitile, text, listContainer) {
    const date = format(new Date(), 'MM/dd/yyyy');

    contentTitile.el.textContent = text;
    if (text === 'Inbox') {
        Array.from(listContainer.el.children).forEach((list) => {
            if (list.classList.contains('addToTaskBar')) return;
            if (list.classList.contains('hidden')) {
                list.classList.remove('hidden');
            }
        });
    }
    if (text === 'Today') {
        Array.from(listContainer.el.children).forEach((list) => {
            if (list.classList.contains('addToTaskBar')) return;
            // console.log(date, list.dataset.date);
            if (list.dataset.date !== date) {
                list.classList.add('hidden');
            } else {
                list.classList.remove('hidden');
            }
        });
    }
    if (text === 'Upcoming') {
        Array.from(listContainer.el.children).forEach((list) => {
            if (list.classList.contains('addToTaskBar')) return;
            if (
                differenceInWeeks(
                    new Date(list.dataset.date),
                    new Date(date)
                ) !== 1
            ) {
                list.classList.add('hidden');
            } else {
                list.classList.remove('hidden');
            }
        });
    }
}
