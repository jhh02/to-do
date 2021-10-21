import { createElement, addClassNames, appendChild } from './functions';

export default function handlePriority(e, todo) {
    const priorities = ['Urgent', 'Important', 'Somewhat', 'Low'];
    const dataWrapper = createElement('div', '', 'dataWrapper');
    const dataSelect = createElement('select', '', 'dataSelect');
    dataSelect.el.name = 'priority';

    priorities.forEach((priority) => {
        const option = createElement('option', priority, 'priority');
        option.el.value = priority;
        appendChild(dataSelect.el, option.el);
    });
    appendChild(dataWrapper.el, dataSelect.el);
    e.target.parentElement.insertBefore(dataWrapper.el, e.target);
    addClassNames(e.target, 'hidden');
    todo.priority = dataSelect.el.value;
}
