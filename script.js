// Get all elements with class 'pic' inside '.photo-gallery' and convert NodeList to Array
const pics = Array.from(document.querySelectorAll('.photo-gallery .pic'));

// Filter out pics that contain a video and get the src of those videos
let videos = pics.filter(pic => pic.querySelector('video')).map(pic => pic.querySelector('video').src);

// Initialize the current video index
let currentVideoIndex = 0;

// Get the video element inside '.popup-video'
const popupVideo = document.querySelector('.popup-video video');

// Loop over each pic
pics.forEach((pic, index) => {
    // If the pic contains an image
    if (pic.querySelector('img')) {
        // Set the onclick event
        pic.onclick = () => {
            // Set the src of the image in '.popup-image' to the src of the clicked image
            document.querySelector('.popup-image img').src = pic.querySelector('img').src;
            // Display the '.popup-image'
            document.querySelector('.popup-image').style.display = 'flex';
        }
    // If the pic contains a video
    } else if (pic.querySelector('video')) {
        // Set the onclick event
        pic.onclick = () => {
            // Set the current video index to the index of the clicked video's src in the videos array
            currentVideoIndex = videos.indexOf(pic.querySelector('video').src);
            // Set the src of the video in '.popup-video' to the src of the clicked video
            popupVideo.src = videos[currentVideoIndex];
            // Display the '.popup-video'
            document.querySelector('.popup-video').style.display = 'flex';
            // Play the video
            popupVideo.play();
        };
    }
});

// Set the onclick event for '.popup-video'
document.querySelector('.popup-video').onclick = (event) => {
    // If the clicked element is not a video
    if (event.target.tagName !== 'VIDEO') {
        // Hide the '.popup-video'
        document.querySelector('.popup-video').style.display = 'none';
        // Pause the video
        popupVideo.pause();
    }
}

// Set the onended event for the video
popupVideo.onended = () => {
    // When the video ends, find the next video in the gallery
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    // Change the source of the video in the popup to the source of the next video
    popupVideo.src = videos[currentVideoIndex];
    // Play the next video
    popupVideo.play();
};

// Set the onclick event for '.popup-image'
document.querySelector('.popup-image').onclick = (event) => {
    // If the clicked element is not an image
    if (event.target.tagName !== 'IMG') {
        // Hide the '.popup-image'
        document.querySelector('.popup-image').style.display = 'none';
    }
}

// Set the onclick event for '#prev-video'
document.getElementById('prev-video').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the event from bubbling up
    // Decrement the currentVideoIndex, and wrap around to the end of the array if necessary
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    // Change the source of the video in the popup to the source of the previous video
    popupVideo.src = videos[currentVideoIndex];
    // Play the previous video
    popupVideo.play();
});

// Set the onclick event for '#next-video'
document.getElementById('next-video').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the event from bubbling up
    // Increment the currentVideoIndex, and wrap around to the start of the array if necessary
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    // Change the source of the video in the popup to the source of the next video
    popupVideo.src = videos[currentVideoIndex];
    // Play the next video
    popupVideo.play();
});

// Get all radio inputs
let radios = document.querySelectorAll('input[type="radio"][name="photos"]');

// Get all labels
let labels = document.querySelectorAll('.radio-label');

// Add a change event listener to each radio input
radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        // Remove the 'label-active' class from all labels
        labels.forEach(label => label.classList.remove('label-active'));

        // Add the 'label-active' class to the label associated with the checked radio input
        labels[index].classList.add('label-active');
    });
});

// Select all .pic elements
const picElements = Array.from(document.querySelectorAll('.pic'));

// Filter to only those that contain a video
const videoContainers = picElements.filter(pic => pic.querySelector('video'));

// For each .pic element that contains a video
videoContainers.forEach(container => {
  const video = container.querySelector('video');

  // When the mouse enters the .pic area, play the video
  container.addEventListener('mouseenter', function() {
    video.play();
  });

  // When the mouse leaves the .pic area, pause the video
  container.addEventListener('mouseleave', function() {
    video.pause();
  });
});