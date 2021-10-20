import { createElement } from '../DOM/functions';

export default function createListItems() {
    const subLists = createElement('ul', '', 'subLists');
    const subList = createElement('li', '', 'subList');
    const subCheckbox = createElement('input', '', 'subCheckbox');
    const subTitle = createElement('input', '', 'subTitle');
    const subDeleteButton = createElement('button', '🗑️', 'subDeleteButton');
    subTitle.el.type = 'text';
    subDeleteButton.el.type = 'submit';
    subCheckbox.el.type = 'checkbox';
    subTitle.el.placeholder = 'Write to do';

    return {
        subLists,
        subList,
        subCheckbox,
        subTitle,
        subDeleteButton,
    };
}
