import {
    createElement,
    removeClassNames,
    addClassNames,
} from '../DOM/functions';

export default function handleTextArera(e, todo) {
    if (e.key === 'Enter' && e.target.value) {
        const toDoNotesValue = createElement('p', '', 'toDoNotesValue');
        const notesValue = e.target.value;
        e.target.value = '';

        // * Textarea double click event handler (user edit)
        toDoNotesValue.el.addEventListener('dblclick', (dbclickEvent) => {
            dbclickEvent.target.nextSibling.value = notesValue;
            removeClassNames(dbclickEvent.target.nextSibling, 'hidden');
            dbclickEvent.target.remove();
        });

        toDoNotesValue.el.textContent = notesValue;
        e.target.parentElement.insertBefore(toDoNotesValue.el, e.target);
        addClassNames(e.target, 'hidden');
        todo.notes = notesValue;
    }
}
