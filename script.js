
// Drift function for the images in Tecnilogies
function driftImage() {
    imgs.forEach(img => {
        img.style.top = (Math.random() * 440) + 60 + 'px';
        img.style.left = (Math.random() * 70) + 10 + 'vw';
    })
}
