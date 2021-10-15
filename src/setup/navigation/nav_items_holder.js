export default function makeNavigationHolder(navigationBar) {
    const navigationItemHolder = document.createElement('ul');
    navigationItemHolder.classList.add('navbar-nav');
    navigationBar.appendChild(navigationItemHolder);

    return navigationItemHolder;
}
