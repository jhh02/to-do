function loadPage() {
    // Create Wrapper
    const wrapper = document.createElement('div');
    wrapper.id = 'content';
    document.body.appendChild(wrapper);

    // Create Navvigation bar
    const navigationBar = document.createElement('nav');
    navigationBar.classList.add('navbar');
    document.body.appendChild(navigationBar);

    // Create Content page
    const inbox = document.createElement('div');
    const today = document.createElement('div');
    const upcoming = document.createElement('div');
    const trash = document.createElement('div');
    const project = document.createElement('div');

    inbox.classList.add('section');
    inbox.classList.add('inbox');
    today.classList.add('section');
    today.classList.add('today');
    upcoming.classList.add('section');
    upcoming.classList.add('upcoming');
    trash.classList.add('section');
    trash.classList.add('trash');
    project.classList.add('section');
    project.classList.add('project');

    const mainContents = [inbox, today, upcoming, trash, project];
    mainContents.forEach((content) => document.body.appendChild(content));

    // Create Navigation item holder
    const navigationItemHolder = document.createElement('ul');
    navigationItemHolder.classList.add('navbar-nav');
    navigationBar.appendChild(navigationItemHolder);

    // Create Navigation items
    const navItemLogo = document.createElement('li');
    const navItemInbox = document.createElement('li');
    const navItemToday = document.createElement('li');
    const navItemUpcoming = document.createElement('li');
    const navItemTrash = document.createElement('li');
    const navItemProject = document.createElement('li');
    const navItemNewlist = document.createElement('li');

    navItemLogo.classList.add('logo');

    const navItems = [
        navItemLogo,
        navItemInbox,
        navItemToday,
        navItemUpcoming,
        navItemTrash,
        navItemProject,
        navItemNewlist,
    ];

    const navItemsArray = Array.from(navItems)

    navItemsArray.forEach((item) => {
        if (item.className !== 'logo') {
            item.classList.add('nav-item');
        }
        navigationItemHolder.appendChild(item);
    });

    // Create links
    for (let i = 0; i < navItems.length; i += 1) {
        const span = document.createElement('span');
        const svg = document.createElement('i');
        const link = document.createElement('a');
        span.classList.add('link-text');
        link.appendChild(svg);
        link.appendChild(span);
        link.href = '#';
        link.classList.add('nav-link');
        navItems[i].appendChild(link);
    }

    // Assign class names to svg and span
    const logoIcon = document.querySelector('.logo a i');
    const logoSpan = document.querySelector('.logo a span');
    const inboxIcon = document.querySelector('.nav-item:nth-child(2) a i');
    const inboxSpan = document.querySelector('.nav-item:nth-child(2) a span');
    const todayIcon = document.querySelector('.nav-item:nth-child(3) a i');
    const todaySpan = document.querySelector('.nav-item:nth-child(3) a span');
    const upcomingIcon = document.querySelector('.nav-item:nth-child(4) a i');
    const upcomingSpan = document.querySelector(
        '.nav-item:nth-child(4) a span'
    );
    const trashIcon = document.querySelector('.nav-item:nth-child(5) a i');
    const trashSpan = document.querySelector('.nav-item:nth-child(5) a span');
    const projectIcon = document.querySelector('.nav-item:nth-child(6) a i');
    const projectSpan = document.querySelector('.nav-item:nth-child(6) a span');
    const newlistIcon = document.querySelector('.nav-item:nth-child(7) a i');
    const newlistSpan = document.querySelector('.nav-item:nth-child(7) a span');

    logoIcon.classList.add('far');
    logoIcon.classList.add('fa-star');
    logoSpan.textContent = 'Jun';
    inboxIcon.classList.add('fas');
    inboxIcon.classList.add('fa-inbox');
    inboxIcon.dataset.name = 'inbox';
    inboxSpan.textContent = 'Inbox';
    todayIcon.classList.add('fas');
    todayIcon.classList.add('fa-user-clock');
    todayIcon.dataset.name = 'today';
    todaySpan.textContent = 'Today';
    upcomingIcon.classList.add('far');
    upcomingIcon.classList.add('fa-calendar');
    upcomingIcon.dataset.name = 'upcoming';
    upcomingSpan.textContent = 'Upcoming';
    trashIcon.classList.add('far');
    trashIcon.classList.add('fa-trash-alt');
    trashIcon.dataset.name = 'trash';
    trashSpan.textContent = 'Trash';
    projectIcon.classList.add('fas');
    projectIcon.classList.add('fa-project-diagram');
    projectIcon.dataset.name = 'project';
    projectSpan.textContent = 'Project';
    newlistIcon.classList.add('fas');
    newlistIcon.classList.add('fa-plus');
    newlistIcon.dataset.name = 'newlist';
    newlistSpan.textContent = 'New List';
}

export default loadPage;
