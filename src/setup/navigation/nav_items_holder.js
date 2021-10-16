import createElement from '../../DOM/createElement';

export default function makeNavigationHolder(navigationBar) {
    const navigationItemHolder = createElement('ul', 'navbar-nav');
    navigationBar.appendChild(navigationItemHolder.el);

    return navigationItemHolder.el;
}
