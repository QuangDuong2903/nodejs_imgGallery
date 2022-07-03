const gallery = document.querySelector('.gallery');

const images = document.querySelectorAll('.img-gallery ul li img')

const prev = document.querySelector('.prev');

const next = document.querySelector('.next');

const close = document.querySelector('.close');

var galleryImg = document.querySelector('.gallery__inner img');

var imgIndex = 0;

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        imgIndex = index;
        galleryImg.src = image.src;
        gallery.classList.add('show');
    })
})

close.addEventListener('click', () => {
    gallery.classList.remove('show');
});

prev.addEventListener('click', () => {
    if(imgIndex != 0)
        imgIndex--;
    else
        imgIndex = images.length - 1;
    galleryImg.src = images[imgIndex].src;
})

next.addEventListener('click', () => {
    if(imgIndex != images.length - 1)
        imgIndex++;
    else
        imgIndex =0;
    galleryImg.src = images[imgIndex].src;
})

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}