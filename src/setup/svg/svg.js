export default function makeSvgs() {
    const logoIcon = document.querySelector('.logo a i');
    const inboxIcon = document.querySelector('.nav-item:nth-child(2) a i');
    const todayIcon = document.querySelector('.nav-item:nth-child(3) a i');
    const upcomingIcon = document.querySelector('.nav-item:nth-child(4) a i');
    const projectIcon = document.querySelector('.nav-item:nth-child(5) a i');
    const newlistIcon = document.querySelector('.nav-item:nth-child(6) a i');

    logoIcon.classList.add('far');
    logoIcon.classList.add('fa-star');

    inboxIcon.classList.add('fas');
    inboxIcon.classList.add('fa-inbox');
    inboxIcon.dataset.name = 'inbox';

    todayIcon.classList.add('fas');
    todayIcon.classList.add('fa-user-clock');
    todayIcon.dataset.name = 'today';

    upcomingIcon.classList.add('far');
    upcomingIcon.classList.add('fa-calendar');
    upcomingIcon.dataset.name = 'upcoming';

    projectIcon.classList.add('fas');
    projectIcon.classList.add('fa-project-diagram');
    projectIcon.dataset.name = 'project';

    newlistIcon.classList.add('fas');
    newlistIcon.classList.add('fa-plus');
    newlistIcon.dataset.name = 'newlist';
}
