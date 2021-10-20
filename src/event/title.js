import {
    createElement,
    removeClassNames,
    addClassNames,
} from '../DOM/functions';

export default function handleTitle(e, todo) {
    if (e.key === 'Enter' && e.target.value) {
        const toDoHeadginValue = createElement('span', '', 'toDoTitleValue');
        const headingValue = e.target.value;
        e.target.value = '';
        // * Todo title double click event handler
        toDoHeadginValue.el.addEventListener('dblclick', (dbclickEvent) => {
            dbclickEvent.target.nextSibling.value = headingValue;
            removeClassNames(dbclickEvent.target.nextSibling, 'hidden');
            dbclickEvent.target.remove();
        });

        toDoHeadginValue.el.textContent = headingValue;
        e.target.parentElement.insertBefore(toDoHeadginValue.el, e.target);
        addClassNames(e.target, 'hidden');
        todo.title = headingValue;
    }
}
