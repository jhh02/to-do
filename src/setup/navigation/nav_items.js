export default function createNavElements() {
    // Create Navigation items
    const navItemLogo = document.createElement('li');
    const navItemInbox = document.createElement('li');
    const navItemToday = document.createElement('li');
    const navItemUpcoming = document.createElement('li');
    const navItemProject = document.createElement('li');
    const navItemNewlist = document.createElement('li');

    return [
        navItemLogo,
        navItemInbox,
        navItemToday,
        navItemUpcoming,
        navItemProject,
        navItemNewlist,
    ];
}
