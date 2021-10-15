export default function createWrapper() {
    // Create Wrapper
    const wrapper = document.createElement('div');
    wrapper.id = 'content';
    document.body.appendChild(wrapper);
    return wrapper;
}
