import {
    createElement,
    addClassNames,
    appendChild,
    drawLineThroughDefault,
    unDrawLineThroughDefault,
    removeClassNames,
} from './functions';
import createListItems from '../DOM/subToDo';

// TODO refactor

export default function handleCheckList(e, todo, notes) {
    const listItems = createListItems(notes);

    listItems.subCheckbox.el.addEventListener('change', (ev) => {
        if (ev.target.checked) {
            drawLineThroughDefault(ev.target.nextSibling);
        } else {
            unDrawLineThroughDefault(ev.target.nextSibling);
        }
    });

    function handleDelete(trashEvent, todoObj) {
        const allSubLists = todoObj.getSubLists();
        const newSubLists = allSubLists.filter(
            (list) =>
                list.replaceAll(' ', '').toLowerCase() !==
                trashEvent.target.parentElement.id
        );
        todoObj.subLists = newSubLists;
        trashEvent.target.parentElement.remove();
    }

    function handleEnter(a, item) {
        const text = a.target.value;
        if (a.key === 'Enter' && text) {
            const textSpan = createElement('span', text, 'text');
            a.target.parentElement.setAttribute(
                'id',
                text.replaceAll(' ', '').toLowerCase()
            );
            a.target.parentElement.insertBefore(textSpan.el, a.target);
            addClassNames(a.target, 'hidden');
            item.addSubList(text);

            // * Cloning items
            const cloneSubList = listItems.subList.el.cloneNode(false);
            const cloneSubCheckbox = listItems.subCheckbox.el.cloneNode(true);
            const cloneSubDeleteButton =
                listItems.subDeleteButton.el.cloneNode(true);
            const cloneSubTitle = listItems.subTitle.el.cloneNode(true);
            cloneSubTitle.value = '';
            removeClassNames(cloneSubTitle, 'hidden');
            appendChild(
                cloneSubList,
                cloneSubCheckbox,
                cloneSubTitle,
                cloneSubDeleteButton
            );
            listItems.subLists.el.appendChild(cloneSubList);
            cloneSubTitle.focus();

            cloneSubCheckbox.addEventListener('change', (ev) => {
                if (ev.target.checked) {
                    drawLineThroughDefault(ev.target.nextSibling);
                } else {
                    unDrawLineThroughDefault(ev.target.nextSibling);
                }
            });

            cloneSubTitle.addEventListener('keypress', (b) =>
                handleEnter(b, todo)
            );

            cloneSubDeleteButton.addEventListener('click', (deleteEvent) =>
                handleDelete(deleteEvent, todo)
            );
        }
    }
    listItems.subList.el.addEventListener('keypress', (b) =>
        handleEnter(b, todo)
    );

    listItems.subDeleteButton.el.addEventListener('click', (deleteEvent) =>
        handleDelete(deleteEvent, todo)
    );
}
