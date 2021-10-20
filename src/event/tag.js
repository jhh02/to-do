import { createElement, removeAllChildNodes } from '../DOM/functions';

import { Todo } from '../DOM/objects';

export default function handleTag(e, todo, tagList) {
    // TODO Show current tags below

    if (e.key === 'Enter' && e.target.value) {
        removeAllChildNodes(tagList.el);
        const storedTag = e.target.value;
        e.target.value = '';
        todo.pushTag(storedTag);

        if (Todo.getTotalTags().length) {
            Todo.getTotalTags().forEach((tag) => {
                const usedTag = createElement('option', '');
                usedTag.el.value = tag;
                tagList.el.appendChild(usedTag.el);
            });
            e.target.parentElement.insertBefore(tagList.el, e.target);
        }
    }
}
