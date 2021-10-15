export default function makeNavigation(wrapper) {
    // Create Navvigation bar
    const navigationBar = document.createElement('nav');
    navigationBar.classList.add('navbar');
    wrapper.appendChild(navigationBar);

    return navigationBar;
}
