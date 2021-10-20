import {
    drawLineThroughDefault,
    unDrawLineThroughDefault,
    lineThrough,
} from '../DOM/functions';

// * To do checkbox handler
export default function handleCheckBox(e, todo) {
    const checkedOn = e.target.checked;
    const toDoHeading = e.target.nextSibling;
    const textArea = e.target.parentElement.nextSibling;
    const checkList = e.target.parentElement;

    if (checkedOn) {
        drawLineThroughDefault(toDoHeading);
        drawLineThroughDefault(textArea);

        // TODO refactor
        Array.from(checkList.children).forEach((el) => {
            if (el.classList.contains('checkBoxChecklist')) {
                Array.from(el.children).forEach((li) => {
                    Array.from(li.children).forEach((span) => {
                        if (span.classList.contains('checkBoxForCheckList'))
                            span.checked = true;

                        if (span.classList.contains('spanText')) {
                            lineThrough(span, 'grey', 'line-through');
                        }
                    });
                });
            }
        });
    } else {
        unDrawLineThroughDefault(toDoHeading);
        unDrawLineThroughDefault(textArea);

        Array.from(checkList.children).forEach((el) => {
            if (el.classList.contains('checkBoxChecklist')) {
                Array.from(el.children).forEach((li) => {
                    console.log(li);
                    Array.from(li.children).forEach((span) => {
                        if (span.classList.contains('checkBoxForCheckList')) {
                            span.checked = false;
                        }
                        if (span.classList.contains('spanText')) {
                            lineThrough(span, 'black', 'none');
                        }
                    });
                });
            }
        });
    }
    todo.checkbox = checkedOn;
}
