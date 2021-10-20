const todos = [];
class Todo {
    static totalCount = 0;

    static totalTags = [];

    static getTotalTags() {
        return Todo.totalTags;
    }

    static getTotalToDos() {
        return Todo.totalCount;
    }

    tags = [];

    subLists = [];

    constructor(checkbox, title, notes, dueDate, tag, subList, priority) {
        this.checkbox = checkbox;
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate;
        this.tag = tag;
        this.subList = subList;
        this.priority = priority;
        this.index = Todo.totalCount;
        Todo.totalCount += 1;
    }

    // function that removes redundant tags

    getTitle() {
        return this.title;
    }

    getTag() {
        return this.tag;
    }

    getTags() {
        return this.tags;
    }

    pushTag(someTag) {
        this.tags.push(someTag);
        Todo.totalTags.push(someTag);
    }

    getDates() {
        return this.dueDate;
    }

    getSubLists() {
        return this.subLists;
    }

    getSubList() {
        return this.sublist;
    }

    addSubList(list) {
        this.subLists.push(list);
    }

    get id() {
        return `${this.getTitle()}${this.getDates()}`;
    }

    object() {
        return this;
    }
}

export { todos, Todo };
