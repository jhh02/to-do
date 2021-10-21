export default function createToDoForm(todoBox) {
    // * Create todo box
    const title = todoBox.list.el.querySelector('.title');
    const notes = todoBox.list.el.querySelector('.notes');
    const checkbox = todoBox.list.el.querySelector(`.checkbox`);
    const tagInput = todoBox.list.el.querySelector('.tagInput');
    const dateButton = todoBox.list.el.querySelector('.dateButton');
    const subListButton = todoBox.list.el.querySelector('.subListButton');
    const priorityButton = todoBox.list.el.querySelector('.priorityButton');
    const confirmButton = todoBox.list.el.querySelector('.confirmButton');
    const cancelButton = todoBox.list.el.querySelector('.cancelButton');

    return {
        title,
        notes,
        checkbox,
        tagInput,
        dateButton,
        subListButton,
        priorityButton,
        confirmButton,
        cancelButton,
    };
}
