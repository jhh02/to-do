import createElement from '../DOM/createElement';

export default function userLogin() {
    const sections = document.querySelectorAll('.main');
    const userNameInput = document.querySelector('.userName');
    const userLoginContainer = document.querySelector('.userLogin');
    const welcomeUser = document.querySelector('.welcomeUser');
    const userNameNav = document.querySelector('.user-text');
    const navBar = document.querySelector('.navbar');
    const userNav = document.querySelector('.user-list');

    // When user button is clicked
    userNav.addEventListener('click', (e) => {
        Array.from(sections).forEach((element) => {
            element.classList.add('hidden-content');
        });
    });

    function loginUser(e) {
        const keyButton = e;
        const pressedkey = e.key;

        if (pressedkey === 'Enter') {
            const userName = keyButton.target.value;
            keyButton.target.value = '';
            localStorage.setItem('userName', userName);
            userLoginContainer.classList.add('hidden');
            // 1. Welcome User
            const welcomeMessage = createElement('h1', 'welcomeMessage');
            welcomeMessage.el.textContent = `Welcome ${userName}`;
            welcomeUser.classList.remove('hidden');
            welcomeUser.appendChild(welcomeMessage.el);

            // 2. Show live clock
            const clock = createElement('span', 'clock');
            welcomeUser.appendChild(clock.el);
            setInterval(() => {
                const date = new Date();
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();
                clock.el.textContent = `${hours < 10 ? `0${hours}` : hours}: ${
                    minutes < 10 ? `0${minutes}` : minutes
                } : ${seconds < 10 ? `0${seconds}` : seconds} `;
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
        welcomeUser.classList.remove('hidden');
        const user = localStorage.getItem('userName');
        const welcomeMessage = createElement('div', 'welcomeMessage');
        welcomeMessage.el.textContent = `Welcome ${user}`;
        welcomeUser.appendChild(welcomeMessage.el);

        const clock = createElement('span', 'clock');
        welcomeUser.appendChild(clock.el);
        setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            clock.el.textContent = `${hours < 10 ? `0${hours}` : hours}: ${
                minutes < 10 ? `0${minutes}` : minutes
            } : ${seconds < 10 ? `0${seconds}` : seconds} `;
        }, 1000);
        // 4. Print User name on logo bar
        userNameNav.textContent = user;
        // 2. Grant access nav bar
        navBar.style.pointerEvents = 'auto';
    }
}
