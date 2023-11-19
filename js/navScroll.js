const primaryHeader = document.querySelector('nav');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', entries[0].isIntersecting)
    primaryHeader.classList.toggle('notSticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);