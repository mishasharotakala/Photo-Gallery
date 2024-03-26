// Select all elements with class 'pic' inside an element with class 'photo-gallery'
document.querySelectorAll('.photo-gallery .pic').forEach(pic => {
    // Add a click event listener to each 'pic' element
    pic.onclick = () => {
        // On click, change the source of the image in the popup to the source of the clicked image
        document.querySelector('.popup-image img').src = pic.querySelector('img').src;
        // Display the popup
        document.querySelector('.popup-image').style.display = 'flex';
    }
});

// The following commented code would add a click event listener to the span inside the popup
// document.querySelector('.popup-image span').onclick = () => {
//     // On click, it would hide the popup
//     document.querySelector('.popup-image').style.display = 'none';
// }

// Add a click event listener to the popup
document.querySelector('.popup-image').onclick = (event) => {
    // If the clicked element inside the popup is not an image
    if (event.target.tagName !== 'IMG') {
        // Hide the popup
        document.querySelector('.popup-image').style.display = 'none';
    }
}

// Select all radio inputs inside an element with class 'start'
document.querySelectorAll('.start input[type="radio"]').forEach(radio => {
    // Add a click event listener to each radio input
    radio.onclick = () => {
        // On click, remove the 'label-active' class from all labels
        document.querySelectorAll('.radio-label').forEach(label => {
            label.classList.remove('label-active');
        });
        // Add the 'label-active' class to the label corresponding to the clicked radio input
        document.querySelector(`label[for="${radio.id}"]`).classList.add('label-active');
    }
});