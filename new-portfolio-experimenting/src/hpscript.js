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
