export default function makeSpan() {
    const logoSpan = document.querySelector('.logo a span');
    const inboxSpan = document.querySelector('.nav-item:nth-child(2) a span');
    const todaySpan = document.querySelector('.nav-item:nth-child(3) a span');
    const upcomingSpan = document.querySelector(
        '.nav-item:nth-child(4) a span'
    );
    const projectSpan = document.querySelector('.nav-item:nth-child(5) a span');
    const newlistSpan = document.querySelector('.nav-item:nth-child(6) a span');

    logoSpan.textContent = 'Jun';
    inboxSpan.textContent = 'Inbox';
    todaySpan.textContent = 'Today';
    upcomingSpan.textContent = 'Upcoming';
    projectSpan.textContent = 'Project';
    newlistSpan.textContent = 'New List';
}
