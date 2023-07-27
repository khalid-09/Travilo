'use strict';
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, obersver) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    obersver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.05,
});

allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});
