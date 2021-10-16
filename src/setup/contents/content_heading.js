import createElement from '../../DOM/createElement';

export default function createContentsHeading() {
    // Create Content page
    const inbox = createElement('div', 'section', 'inbox', 'viewing');
    const today = createElement('div', 'section', 'today');
    const upcoming = createElement('div', 'section', 'upcoming');
    const project = createElement('div', 'section', 'project');

    return [inbox, today, upcoming, project];
}
