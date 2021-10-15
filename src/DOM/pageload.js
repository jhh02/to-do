import createWrapper from '../setup/wrapper';
import createContents from '../setup/contents/content';
import createContentsHeading from '../setup/contents/content_heading';
import makeNavigationHolder from '../setup/navigation/nav_items_holder';
import makeNavigation from '../setup/navigation/nav';
import createNavElements from '../setup/navigation/nav_items';
import createLinks from '../setup/links/links';
import makeSvgs from '../setup/svg/svg';
import makeSpan from '../setup/span/span';

function loadPage() {
    // Create Wrapper
    const wrapper = createWrapper();

    // Create Navvigation bar
    const navigationBar = makeNavigation(wrapper);

    // Create Content page
    const mainContents = createContentsHeading();

    // Create content main page
    createContents();

    // Adding contents to wrapper
    mainContents.forEach((content) => wrapper.appendChild(content));

    // Create Navigation item holder
    const navigationItemHolder = makeNavigationHolder(navigationBar);

    // Create Navigation items
    const navItems = createNavElements();

    navItems[0].classList.add('logo');

    const navItemsArray = Array.from(navItems);

    navItemsArray.forEach((item) => {
        if (item.className !== 'logo') {
            item.classList.add('nav-item');
        }
        navigationItemHolder.appendChild(item);
    });

    // Create links
    createLinks(navItems);

    // Assign class names to svg
    makeSvgs();
    makeSpan();
}

export default loadPage;
