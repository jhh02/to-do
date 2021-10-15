export default function createLinks(navItems) {
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
}
