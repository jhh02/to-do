import { createElement, appendChild } from '../DOM/functions';

export default function createToDoBox() {
    //* Create To Do Element
    const list = createElement('div', '', 'list');
    const titleWrapper = createElement('div', '', 'titleWrapper');
    const bottomButtons = createElement('div', '', 'bottomButtons');
    const notes = createElement('textarea', '', 'notes');

    const checkbox = createElement('input', '', 'checkbox');
    const title = createElement('input', '', 'title');
    const dateButton = createElement('input', '', 'dateButton');
    const tagInput = createElement('input', '', 'tagInput');
    const subListButton = createElement('div', '📋', 'subListButton');
    const priorityButton = createElement('div', '🚩', 'priorityButton');
    const confirmButton = createElement('button', '✅', 'confirmButton');
    const cancelButton = createElement('button', '❌', 'cancelButton');
    const tagList = createElement('datalist');

    dateButton.el.type = 'date';
    dateButton.el.value = new Date();
    notes.el.placeholder = 'Notes';
    checkbox.el.type = 'checkbox';
    title.el.placeholder = 'New To-Do';
    tagInput.el.type = 'text';
    tagInput.el.placeholder = 'tags';
    tagInput.el.setAttribute('list', 'tagList');
    tagInput.el.setAttribute('id', 'tagList');
    tagList.el.setAttribute('id', 'tagList');

    appendChild(titleWrapper.el, checkbox.el, title.el);
    appendChild(
        bottomButtons.el,
        confirmButton.el,
        cancelButton.el,
        dateButton.el,
        tagInput.el,
        subListButton.el,
        priorityButton.el
    );
    appendChild(list.el, titleWrapper.el, notes.el, bottomButtons.el);

    return {
        list,
        titleWrapper,
        bottomButtons,
        notes,
        checkbox,
        title,
        dateButton,
        tagInput,
        subListButton,
        priorityButton,
        confirmButton,
        cancelButton,
        tagList,
    };
}
