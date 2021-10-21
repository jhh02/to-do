import { createElement, removeClassNames, addClassNames } from './functions';

export default function handleTextArera(e, todo, dateButton) {
    if (e.key === 'Enter' && e.target.value) {
        const toDoNotes = createElement('p', '', 'toDoNotes');
        const notesValue = e.target.value;
        e.target.value = '';

        // * Edit
        toDoNotes.el.addEventListener('dblclick', (dbclickEvent) => {
            dbclickEvent.target.nextSibling.value = notesValue;
            removeClassNames(dbclickEvent.target.nextSibling, 'hidden');
            dbclickEvent.target.remove();
        });

        toDoNotes.el.textContent = notesValue;
        e.target.parentElement.insertBefore(toDoNotes.el, e.target);
        addClassNames(e.target, 'hidden');
        todo.notes = notesValue;

        dateButton.focus();
    }
}
