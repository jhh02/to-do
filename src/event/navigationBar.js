import {
    querySelectorAll,
    querySelector,
    removeClassNames,
    addClassNames,
} from './functions';

import showContent from './showContent';
// TODO refactor

function createNavigationEvent() {
    const navigationItems = querySelectorAll('.nav-item');
    const section = querySelector('.main');
    const userMessages = querySelector('.welcomeUser');
    const userNav = querySelector('.user');
    const heading = querySelector('.contentHeading');
    const listContainer = querySelector('.toDoListContainer');

    userNav.el.addEventListener('click', () => {
        if (userMessages.el.classList.contains('clicked'))
            removeClassNames(userMessages.el, 'clicked');
        addClassNames(section.el, 'hidden-content');
    });

    function handleNavs(e) {
        addClassNames(userMessages.el, 'clicked');
        removeClassNames(section.el, 'hidden-content');

        const nav = e.target.classList[1];
        switch (nav) {
            case 'inbox':
                showContent(heading, 'Inbox', listContainer);
                break;
            case 'today':
                showContent(heading, 'Today', listContainer);
                break;
            case 'upcoming':
                showContent(heading, 'Upcoming', listContainer);
                break;
            default:
                break;
        }
    }

    navigationItems.el.forEach((item) => {
        item.addEventListener('click', (e) => handleNavs(e));
    });
}

export default createNavigationEvent;
