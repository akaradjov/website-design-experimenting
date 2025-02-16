// INIT AOS
AOS.init({
    duration: 1000, 
});


// FROG ANIMATION SCRIPT TO ENSURE LOCKS ETC
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
    });

    const videoSection = document.querySelector('.video-section');
    const video = document.querySelector('.background-video');
    const overlayText = document.querySelector('.overlay-text');
    const contentSection = document.querySelector('.content');
    let videoLocked = false;

    window.addEventListener('scroll', function() {
        const videoSectionTop = videoSection.getBoundingClientRect().top;
        const videoSectionBottom = videoSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (videoSectionTop < windowHeight && !videoLocked) {
            video.classList.add('fixed-video');
            overlayText.style.opacity = 1;
            videoLocked = true;

            setTimeout(() => {
                video.classList.remove('fixed-video');
                overlayText.style.opacity = 0;
                videoLocked = false;
            }, 3000); 
        }

        
        if (videoLocked && videoSectionBottom <= windowHeight / 2) {
            clearTimeout(unlockTimeout);
            video.classList.remove('fixed-video');
            overlayText.style.opacity = 0;
            videoLocked = false;
        }
    });
});



document.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    let transitionPoint = windowHeight * 0.5; // Adjust for earlier/later transition

    let bg1 = document.querySelector(".bg1");
    let bg2 = document.querySelector(".bg2");

    // Adjust opacity based on scroll position
    let fadeOpacity = Math.max(0, 1 - scrollY / transitionPoint);
    bg1.style.opacity = fadeOpacity;

    // Once fully faded out, lock the second image
    if (scrollY >= transitionPoint) {
        bg2.style.opacity = 1;
    } else {
        bg2.style.opacity = 0;
    }
});