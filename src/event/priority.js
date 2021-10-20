import { createElement, addClassNames, appendChild } from '../DOM/functions';

export default function handlePriority(e, todo) {
    class Priority {
        constructor(level, urgency) {
            this.level = level;
            this.urgency = urgency;
        }
    }

    const urgent = new Priority(0, 'Urgent and Important');
    const important = new Priority(1, 'Important but NOT Urgent');
    const delegate = new Priority(2, 'Urgent and but NOT Important');
    const remove = new Priority(3, 'Not Important Not Urgent');

    // * Create html elements
    const dataWrapper = createElement('div', '', 'dataWrapper');
    const dataSelect = createElement('select', '', 'dataSelect');
    const priorities = [urgent, important, delegate, remove];
    dataSelect.el.name = 'priority';

    priorities.forEach((priority) => {
        const option = createElement(
            'option',
            priority.urgency,
            priority.level
        );
        option.el.value = priority.urgency;
        appendChild(dataSelect.el, option.el);
    });
    appendChild(dataWrapper.el, dataSelect.el);
    e.target.parentElement.insertBefore(dataWrapper.el, e.target);
    dataSelect.el.style.width = '100px';
    addClassNames(e.target, 'hidden');
    todo.priority = dataSelect.el.value;
}
