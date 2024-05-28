document.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
  
    // Enlarge the image as you scroll down
    let scale = 1 + scrollPosition / 1000;
    document.querySelector('.container img').style.transform = `scale(${scale})`;
  
    // Fade out the image
    let opacity = 1 - scrollPosition / 500;
    document.querySelector('.container img').style.opacity = opacity;
  
    // Change background color or set a new background image as needed
    // document.body.style.backgroundColor = 'your-color';
    // document.body.style.backgroundImage = 'url(new-background.jpg)';
  });
