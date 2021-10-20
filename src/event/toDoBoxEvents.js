import { querySelectorAll } from '../DOM/functions';
import { Todo } from '../DOM/objects';
import handleCheckBox from './checkbox';
import handleTitle from './title';
import handleTextArera from './textArea';
import handleTag from './tag';
import handleCheckList from './checklist';
import handlePriority from './priority';
import handleConfirm from './confirm';
import handleCancel from './cancel';
import handleDate from './date';

export default function addEventsToTodobox(todoBox) {
    const addToTasks = querySelectorAll('.addToTaskBar');
    const checkbox = todoBox.list.el.querySelector(`.checkbox`);
    const title = todoBox.list.el.querySelector('.title');
    const notes = todoBox.list.el.querySelector('.notes');
    const dateButton = todoBox.list.el.querySelector('.dateButton');
    const tagInput = todoBox.list.el.querySelector('.tagInput');
    const subListButton = todoBox.list.el.querySelector('.subListButton');
    const priorityButton = todoBox.list.el.querySelector('.priorityButton');
    const confirmButton = todoBox.list.el.querySelector('.confirmButton');
    const cancelButton = todoBox.list.el.querySelector('.cancelButton');

    // * Make a new todo object
    const todo = new Todo();

    // * To do checkbox
    checkbox.addEventListener('change', (e) => handleCheckBox(e, todo));

    // * Todo title
    title.addEventListener('keypress', (e) => handleTitle(e, todo));

    // * Note event
    notes.addEventListener('keypress', (e) => handleTextArera(e, todo));

    //* Date event
    dateButton.addEventListener('input', (e) => handleDate(e, todo));

    //* Tag event
    tagInput.addEventListener('keypress', (e) =>
        handleTag(e, todo, todoBox.tagInput.el)
    );

    //* Checklist event
    subListButton.addEventListener('click', (e) => handleCheckList(e, todo));

    // * Priority event
    priorityButton.addEventListener('click', (e) => handlePriority(e, todo));

    //* Cancel event
    cancelButton.addEventListener('click', (e) =>
        handleCancel(e, todoBox.list.el, addToTasks.el, todo)
    );

    //* Confirm event
    confirmButton.addEventListener('click', (e) => handleConfirm(e, todo));

    //* Create a new list for todoObject
}
