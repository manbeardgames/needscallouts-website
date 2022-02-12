//  Cachable references to the last known scorll positions
let lastScrollY = 0;

//  Cached refrence to all sections
let sections = document.getElementsByClassName('section');

//  Cached reference to the current section id
let currentSection = 0;

const debounce = (fn) => {
    //  Holds the requestAnimationFrame reference in case we want to cancel it
    let frame;

    return (...params) => {
        //  If frame is already defined, clear it and queue next frame
        if (frame) {
            cancelAnimationFrame(frame);
        }

        //  Queue for next frame
        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    };
};

//  Reads scroll position and stores it in a data attribute
const onScroll = () => {
    // //  Get the current scroll value
    // let currentScroll = window.scrollY;

    // //  Determine scroll direction
    // let sectionOffset = currentScroll >= lastScrollY ? 1 : currentScroll <= lastScrollY ? -1 : 0;

    // //  Determine the next section to scroll to
    // currentSection = Math.min(Math.max(currentSection + sectionOffset, 0), sections.length - 1);

    // lastScrollY = currentScroll;

    // //  Scroll to that section
    // window.scrollTo(0, sections[currentSection].offsetTop);


    // let nav = document.getElementsByClassName('full-screen-navigation')[0];
    // let mobileNav = document.getElementsByClassName('mobile-navigation')[0];
    // let illustration = document.getElementsByClassName('illustration')[0];
    // let targetScroll = illustration.offsetTop + illustration.offsetHeight - 128;
    // if (window.scrollY >= targetScroll) {
    //     // nav.dataset.background = 'dark';
    //     mobileNav.dataset.background = nav.dataset.background = 'dark';
    // } else {
    //     mobileNav.dataset.background = nav.dataset.background = 'transparent';
    //     // nav.dataset.background = 'transparent';
    // }
};

//  Listen for new scroll events
document.addEventListener('scroll', debounce(onScroll), { passive: true });

//  Initial scroll store
onScroll();
