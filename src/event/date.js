import { format } from 'date-fns';

export default function handleDate(e, todo, tagInput) {
    const dueDate = e.target.value;
    const year = dueDate.slice(0, 4);
    const month = dueDate.slice(5, 7) - 1;
    const day = dueDate.slice(8);
    todo.dueDate = format(new Date(year, month, day), 'MM/dd/yyyy');

    tagInput.focus();
}
