document.addEventListener('DOMContentLoaded', function() {
   
    AOS.init({
        duration: 800,         
        once : false,          
        mirror: true,          
        offset: 120,           
        easing: 'ease-in-out'  
    });
});

const headerImages = [
    'images/header6.jpg',
    'images/header7.jpg',
    'images/header8.jpg'
];

let currentImageIndex = 0;
const headerElement = document.getElementById('header-slideshow');

function changeHeaderBackground() {
    headerElement.style.backgroundImage = `url('${headerImages[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % headerImages.length;
}

setInterval(changeHeaderBackground, 3000);

// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (this.checkValidity()) {
        alert('Form submitted successfully!');
        this.reset();
    } else {
        this.reportValidity();
    }
});


