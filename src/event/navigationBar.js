import {
    querySelectorAll,
    querySelector,
    removeClassNames,
    addClassNames,
} from '../DOM/functions';

function createNavigationEvent() {
    const navigationItems = querySelectorAll('.nav-item');
    const sections = querySelectorAll('.main');
    const userMessages = querySelector('.welcomeUser');
    const userNav = querySelector('.user');

    userNav.el.addEventListener('click', (e) => {
        if (userMessages.el.classList.contains('clicked'))
            removeClassNames(userMessages.el, 'clicked');

        sections.el.forEach((item) => {
            addClassNames(item, 'hidden-content');
        });
    });

    navigationItems.el.forEach((item) => {
        item.addEventListener('click', (e) => {
            addClassNames(userMessages.el, 'clicked');
            sections.el.forEach((content) => {
                if (
                    content.classList[0] ===
                    `${e.target.ownerDocument.activeElement.classList[1]}-content`
                ) {
                    removeClassNames(content, 'hidden-content');
                } else {
                    addClassNames(content, 'hidden-content');
                }
            });
        });
    });
}

export default createNavigationEvent;
