import {
    drawLineThroughDefault,
    unDrawLineThroughDefault,
    lineThrough,
} from './functions';

// * To do checkbox handler
export default function handleCheckBox(e, todo) {
    const finished = e.target.checked;
    const title = e.target.nextSibling;
    const notes = e.target.parentElement.nextSibling;
    const subList = e.target.parentElement;

    if (finished) {
        drawLineThroughDefault(title);
        drawLineThroughDefault(notes);
        // TODO refactor
        Array.from(subList.children).forEach((el) => {
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
        unDrawLineThroughDefault(title);
        unDrawLineThroughDefault(notes);

        Array.from(subList.children).forEach((el) => {
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
    todo.checkbox = finished;
}
