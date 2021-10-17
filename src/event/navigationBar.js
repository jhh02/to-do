function createNavigationEvent() {
    const navigationItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.main');
    const userMessages = document.querySelector('.welcomeUser');
    const userNav = document.querySelector('.user');

    userNav.addEventListener('click', (e) => {
        if (userMessages.classList.contains('clicked'))
            userMessages.classList.remove('clicked');
    });
    navigationItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            userMessages.classList.add('clicked');
            sections.forEach((content) => {
                if (
                    content.classList[0] ===
                    `${e.target.ownerDocument.activeElement.classList[1]}-content`
                ) {
                    content.classList.remove('hidden-content');
                } else {
                    content.classList.add('hidden-content');
                }
            });
        });
    });
}

export default createNavigationEvent;
