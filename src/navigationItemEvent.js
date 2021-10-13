function createNavigationEvent() {
    const navigationItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navigationItems.forEach((item) =>
        item.addEventListener('click', (e) => {
            sections.forEach((content) => {
                if (
                    content.classList[1] ===
                    e.target.ownerDocument.activeElement.text.toLowerCase()
                ) {
                    content.classList.add('viewing');
                } else {
                    content.classList.remove('viewing');
                }
            });
        })
    );
}

export default createNavigationEvent;
