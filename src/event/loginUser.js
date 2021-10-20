import {
    createElement,
    appendChild,
    addClassNames,
    removeClassNames,
    querySelector,
} from '../DOM/functions';

export default function userLogin() {
    const sections = querySelector('.main').el;
    const userNameInput = querySelector('.userName').el;
    const userLoginContainer = querySelector('.userLogin').el;
    const welcomeUser = querySelector('.welcomeUser').el;
    const userNameNav = querySelector('.user-text').el;
    const navBar = querySelector('.navbar').el;
    const userNav = querySelector('.user-list').el;

    // When user button is clicked
    userNav.addEventListener('click', (e) => {
        Array.from(sections).forEach((element) => {
            addClassNames(element, 'hidden-content');
        });
    });

    function loginUser(e) {
        const keyButton = e;
        const pressedkey = e.key;

        if (pressedkey === 'Enter') {
            const userName = keyButton.target.value;
            keyButton.target.value = '';
            localStorage.setItem('userName', userName);
            addClassNames(userLoginContainer, 'hidden');
            // 1. Welcome User
            const welcomeMessage = createElement('h1', '', 'welcomeMessage');
            welcomeMessage.el.textContent = `Welcome ${userName}`;
            removeClassNames(welcomeUser, 'hidden');
            const clock = createElement('span', '', 'clock');
            appendChild(welcomeUser, welcomeMessage.el, clock.el);

            // 2. Show live clock
            setInterval(() => {
                clock.el.textContent = `${
                    new Date().getHours() < 10
                        ? `0${new Date().getHours()}`
                        : new Date().getHours()
                }: ${
                    new Date().getMinutes() < 10
                        ? `0${new Date().getMinutes()}`
                        : new Date().getMinutes()
                } : ${
                    new Date().getSeconds() < 10
                        ? `0${new Date().getSeconds()}`
                        : new Date().getSeconds()
                } `;
            }, 1000);
            // 4. Print User name on logo bar
            userNameNav.textContent = userName;
            // 2. Grant access nav bar
            navBar.style.pointerEvents = 'auto';
        }
    }
    // User not signed in
    if (!localStorage.getItem('userName')) {
        userNameInput.addEventListener('keypress', loginUser);
    } else {
        // User signed in
        userLoginContainer.style.display = 'none';
        removeClassNames(welcomeUser, 'hidden');
        const user = localStorage.getItem('userName');
        const welcomeMessage = createElement(
            'div',
            `Welcome ${user}`,
            'welcomeMessage'
        );
        const clock = createElement('span', '', 'clock');
        appendChild(welcomeUser, welcomeMessage.el, clock.el);

        setInterval(() => {
            clock.el.textContent = `${
                new Date().getHours() < 10
                    ? `0${new Date().getHours()}`
                    : new Date().getHours()
            }: ${
                new Date().getMinutes() < 10
                    ? `0${new Date().getMinutes()}`
                    : new Date().getMinutes()
            } : ${
                new Date().getSeconds() < 10
                    ? `0${new Date().getSeconds()}`
                    : new Date().getSeconds()
            } `;
        }, 1000);
        // 4. Print User name on logo bar
        userNameNav.textContent = user;
        // 2. Grant access nav bar
        navBar.style.pointerEvents = 'auto';
    }
}
