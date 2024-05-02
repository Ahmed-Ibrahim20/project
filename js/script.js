let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('header .nav12');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header #sidebar ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('sidebar');
            });
            document.querySelector(`header #sidebar a[href="#${id}"]`).classList.add('sidebar');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');

    // Check if the id attribute exists
    if (nav.getAttribute('id') === 'sidebar') {
        nav.removeAttribute('id');
    } else {
        nav.setAttribute('id', 'sidebar');
    }
};
