import { removeClassNames, addClassNames } from './functions';

export default function toggleHoverCard(element, modal) {
    element.addEventListener('mouseover', () => {
        removeClassNames(modal, 'hidden');
    });
    element.addEventListener('mouseout', () => {
        addClassNames(modal, 'hidden');
    });
}
