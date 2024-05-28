document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');

    
    video.addEventListener('loadeddata', function() {
        video.play().catch(function(error) {
            console.log('Error attempting to play video: ' + error);
            
        });
    });

    
    video.onended = function() {
        window.location.href = 'homepage.html'; 
    };

});

// ENSURES VIDEO IS PLAYED ALL THE WAY THROUGH BEFORE ENTERING HP