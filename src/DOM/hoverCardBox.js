import { createElement, appendChild } from '../event/functions';

export default function makeHoverCardBox(toDoObject, toDoList) {
    const modalBox = createElement('div', '', 'modal', 'hidden');
    const modalContent = createElement('div', '', 'modal-content');
    const notes = createElement('div', `Note: ${toDoObject.notes}`, 'notes');
    const subLists = createElement(
        'div',
        `List: ${toDoObject.subLists}`,
        'subLists'
    );
    const tags = createElement('div', `Tags: ${toDoObject.tags}`, 'tags');

    appendChild(modalContent.el, notes.el, subLists.el, tags.el);
    appendChild(modalBox.el, modalContent.el);

    toDoList.todo.el.insertBefore(modalBox.el, toDoList.buttonWrapper.el);

    return {
        modalBox,
        modalContent,
        notes,
        subLists,
    };
}
