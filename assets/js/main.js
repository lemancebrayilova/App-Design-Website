// On Scroll Function
function navMenu() {
    let navBar = document.querySelector('.navbar-sticky');
    let scrollTopButton = document.querySelector('#scrollUp');

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 120) {
            navBar.classList.add("navbar-sticky-moved-up");
        } else {
            navBar.classList.remove("navbar-sticky-moved-up");
        }

        // Apply Transition
        if(scroll >= 250) {
            navBar.classList.add("navbar-sticky-transitioned");
            scrollTopButton.classList.add("scrollActive");
        } else {
            navBar.classList.remove("navbar-sticky-transitioned");
            scrollTopButton.classList.remove("scrollActive");
        }

        // Sticky On
        if(scroll >= 500) {
            navBar.classList.add("navbar-sticky-on");
        } else {
            navBar.classList.remove("navbar-sticky-on");
        }
    }
}
navMenu();

// Counter design


// APP-SCREEN


// Side Navigation Bar Close While We Click On Navigation Links