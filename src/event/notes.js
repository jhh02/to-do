export default function handleTextArera(e, todo, dateButton) {
    if (e.key === 'Enter' && e.target.value) {
        const notesValue = e.target.value;
        todo.notes = notesValue;
        dateButton.focus();
    }
}
