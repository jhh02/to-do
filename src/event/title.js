export default function handleTitle(e, todo, notes) {
    if (e.key === 'Enter' && e.target.value) {
        const titleValue = e.target.value;
        todo.title = titleValue;
        notes.focus();
    }
}
