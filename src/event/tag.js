import { createElement, removeAllChildNodes } from './functions';

import Todo from '../DOM/toDoObject';

export default function handleTag(e, todo, tagList) {
    // TODO Show current tags below
    if (e.key === 'Enter' && e.target.value) {
        removeAllChildNodes(tagList);
        const tagValue = e.target.value;
        e.target.value = '';
        todo.pushTag(tagValue);

        if (Todo.getTotalTags().length) {
            Todo.getTotalTags().forEach((tag) => {
                const usedTag = createElement('option', '');
                usedTag.el.value = tag;
                tagList.appendChild(usedTag.el);
            });
            e.target.parentElement.insertBefore(tagList, e.target);
        }
    }
}
