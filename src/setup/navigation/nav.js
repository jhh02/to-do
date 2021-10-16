import createElement from '../../DOM/createElement';

export default function makeNavigation(wrapper) {
    // Create Navvigation bar
    const navigationBar = createElement('nav', 'navbar');
    wrapper.appendChild(navigationBar.el);
    return navigationBar.el;
}
