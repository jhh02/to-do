export default function handleDate(e, todo, tagInput) {
    todo.dueDate = e.target.value;
    tagInput.focus();
}
