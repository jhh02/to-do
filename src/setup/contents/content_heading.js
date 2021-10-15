export default function createContentsHeading() {
    // Create Content page
    const inbox = document.createElement('div');
    const today = document.createElement('div');
    const upcoming = document.createElement('div');
    const project = document.createElement('div');

    inbox.classList.add('section');
    inbox.classList.add('inbox');
    inbox.classList.add('viewing');
    today.classList.add('section');
    today.classList.add('today');
    upcoming.classList.add('section');
    upcoming.classList.add('upcoming');
    project.classList.add('section');
    project.classList.add('project');

    const contents = [inbox, today, upcoming, project];
    return contents;
}
