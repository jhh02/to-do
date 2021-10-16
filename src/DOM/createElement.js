export default function createElement(
    text,
    class1 = '',
    class2 = '',
    class3 = ''
) {
    const className = [];
    const el = document.createElement(text);
    if (class1) {
        el.classList.add(class1);
        className.push(class1);
    }
    if (class2) {
        el.classList.add(class2);
        className.push(class2);
    }
    if (class3) {
        el.classList.add(class3);
        className.push(class3);
    }
    return { el, className };
}
