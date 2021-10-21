import { removeClassNames } from './functions';

export default function handleCancel(e, todoBox, addToTaskBars, todo) {
    if (todo.title || todo.notes || todo.dueDate || todo.checklists) {
        // ! Not empty but newly created
        // ! Not empty and not newly created
        // TODO: Identify todo box from todoObjectArray
    } else {
        // ! Empty and newly created
        todoBox.remove();
        addToTaskBars.forEach((taskBtn) => removeClassNames(taskBtn, 'hidden'));
    }
}
