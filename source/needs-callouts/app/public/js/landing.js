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
    let nav = document.getElementsByClassName('full-screen-navigation')[0];
    let mobileNav = document.getElementsByClassName('mobile-navigation')[0];
    let illustration = document.getElementsByClassName('illustration')[0];
    let targetScroll = illustration.offsetTop + illustration.offsetHeight - 128;
    if(window.scrollY >= targetScroll) {
        // nav.dataset.background = 'dark';
        mobileNav.dataset.background = nav.dataset.background = 'dark';
    } else {
        mobileNav.dataset.background = nav.dataset.background = 'transparent';
        // nav.dataset.background = 'transparent';
    }
}


//  Listen for new scroll events
document.addEventListener('scroll', debounce(onScroll), { passive: true });

//  Initial scroll store
onScroll();
