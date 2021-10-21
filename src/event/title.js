import { createElement, removeClassNames, addClassNames } from './functions';

export default function handleTitle(e, todo, notes) {
    if (e.key === 'Enter' && e.target.value) {
        const toDoHeadginValue = createElement('span', '', 'toDoTitleValue');
        const titleValue = e.target.value;
        e.target.value = '';

        // * Todo title double click event handler
        toDoHeadginValue.el.addEventListener('dblclick', (dbclickEvent) => {
            dbclickEvent.target.nextSibling.value = titleValue;
            removeClassNames(dbclickEvent.target.nextSibling, 'hidden');
            dbclickEvent.target.remove();
        });

        toDoHeadginValue.el.textContent = titleValue;
        e.target.parentElement.insertBefore(toDoHeadginValue.el, e.target);
        addClassNames(e.target, 'hidden');
        todo.title = titleValue;

        notes.focus();
    }
}
