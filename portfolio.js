const toggleButton = document.querySelector('.burger-menu');
const nav = document.querySelector('#nav-list');

// Function to toggle menu visibility
function toggleMenu() {
    nav.classList.toggle('show'); // Add or delete the .show class
}

// Add event listener for clicking the .burger-menu button
toggleButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent menu behavior
    toggleMenu(); // Toggle menu visibility
});

// Scroll-to-Top Button Logic
const scrollToTopButton = document.querySelector('.scroll-to-top');

// Function to handle scroll behavior
function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
        scrollToTopButton.style.zIndex = "1000"; // Make sure it's on top when shown
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
        scrollToTopButton.style.zIndex = "-1"; // Optionally hide it from stacking context
    }
}




// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Function to scroll to top when button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add click event listener to scroll-to-top button
scrollToTopButton.addEventListener('click', scrollToTop);


// Scroll to Next Section Logic
const scrollButton = document.getElementById('scroll-button');
const nextSection = document.getElementById('second-section');


// Function to scroll to the next section
function scrollToNextSection() {
    if (nextSection) {
        const sectionPosition = nextSection.getBoundingClientRect().top + window.scrollY;
        const offset = document.querySelector('.fixed-navbar').offsetHeight; //Fixed menu height

        // Scroll to the next section with the correction
        window.scrollTo({
            top: sectionPosition - offset,
            behavior: 'smooth'
        });
    }
}
// Add click event listener to the scroll button
scrollButton.addEventListener('click', scrollToNextSection);



// Function to navigate to the main page 
function goToMain() {
    window.location.href = 'index.html'; // Redirects to the index.html page
}

// Function to navigate to the contacts page
function goToContacts() {
    window.location.href = 'contacts.html'; // Redirects to the contacts.html page
}

// Function to navigate to the works page
function goToWorks() {
    window.location.href = 'works.html'; // Redirects to the works.html page
}

// Variable to keep track of the currently active gallery (null means no gallery is active initially)
var activeGallery = null;


// Function to toggle galleries
function toggleGallery(index) {
    // Get the gallery element by index
    const gallery = document.getElementById(`gallery-${index}`);

    // If there is an active gallery and it is not the current one
    if (activeGallery && activeGallery !== gallery) {
        // Remove the 'active' class from the previous active gallery
        activeGallery.classList.remove('active');
    }

    // Toggle the 'active' class for the current gallery
    if (gallery.classList.contains('active')) {
        gallery.classList.remove('active');
        activeGallery = null; // Reset the active gallery
    } else {
        gallery.classList.add('active');
        activeGallery = gallery; // Set the new active gallery
    }
}



