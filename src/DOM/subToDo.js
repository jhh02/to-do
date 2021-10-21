import { createElement, appendChild } from '../event/functions';

export default function createListItems(notes) {
    // * Create sub todo task bar
    const subLists = createElement('ul', '', 'subLists');
    const subList = createElement('li', '', 'subList');
    const subCheckbox = createElement('input', '', 'subCheckbox');
    const subTitle = createElement('input', '', 'subTitle');
    const subDeleteButton = createElement('button', '🗑️', 'subDeleteButton');
    subTitle.el.type = 'text';
    subDeleteButton.el.type = 'submit';
    subCheckbox.el.type = 'checkbox';
    subTitle.el.placeholder = 'Write to do';

    appendChild(subList.el, subCheckbox.el, subTitle.el, subDeleteButton.el);
    appendChild(subLists.el, subList.el);

    notes.parentElement.insertBefore(subLists.el, notes);

    return {
        subLists,
        subList,
        subCheckbox,
        subTitle,
        subDeleteButton,
    };
}
