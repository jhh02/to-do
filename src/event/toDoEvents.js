import Todo from '../DOM/toDoObject';
import createToDoForm from '../DOM/toDoBox';
import handleCheckBox from './checkbox';
import handleTextArera from './notes';
import handleCheckList from './subList';
import handlePriority from './priority';
import handleConfirm from './confirm';
import handleCancel from './cancel';
import handleTitle from './title';
import handleDate from './date';
import handleTag from './tag';

export default function addEventsToDoForm(addTaskEvent, todoBox) {
    // * Create a new todo object
    const todo = new Todo();

    // * Create todo form
    const toDoForm = createToDoForm(todoBox);

    // * Checkbox event
    toDoForm.checkbox.addEventListener('change', (checkboxEvent) =>
        handleCheckBox(checkboxEvent, todo)
    );

    // * Title event
    toDoForm.title.addEventListener('keypress', (titleEvent) =>
        handleTitle(titleEvent, todo, toDoForm.notes)
    );

    // * Note event
    toDoForm.notes.addEventListener('keypress', (noteEvent) =>
        handleTextArera(noteEvent, todo, toDoForm.dateButton)
    );

    //* Date event
    toDoForm.dateButton.addEventListener('input', (dateEvent) =>
        handleDate(dateEvent, todo, toDoForm.tagInput)
    );

    //* Tag event
    toDoForm.tagInput.addEventListener('keypress', (tagEvent) =>
        handleTag(tagEvent, todo, toDoForm.tagInput)
    );

    //* SubList event
    toDoForm.subListButton.addEventListener('click', (subListEvent) =>
        handleCheckList(subListEvent, todo, toDoForm.notes)
    );

    // * Priority event
    toDoForm.priorityButton.addEventListener('click', (priorityEvent) =>
        handlePriority(priorityEvent, todo)
    );

    //* Confirm event
    toDoForm.confirmButton.addEventListener('click', (confirmEvent) =>
        handleConfirm(confirmEvent, todo, todoBox.list.el)
    );

    //* Cancel event
    toDoForm.cancelButton.addEventListener('click', (cancelEvent) =>
        handleCancel(cancelEvent, todoBox.list.el, addTaskEvent, todo)
    );

    //* Create a new list for todoObject
}
