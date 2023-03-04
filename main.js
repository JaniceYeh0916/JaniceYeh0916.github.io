for (var i = 0; i < images.length; i++) {
    var image = images[i], width = String(image.currentStyle.width);
    if (width.indexOf('%') == -1) {
        continue;
    }
    image.origWidth = image.offsetWidth;
    image.origHeight = image.offsetHeight;
    imgCache.push(image);
    c.ieAlpha(image);
    image.style.width = width;
}

function setZoom() {
    var targetZoom = 1;
    var currentZoom = window.innerWidth / document.documentElement.clientWidth;
    var scale = targetZoom / currentZoom;
    document.body.style.zoom = scale;
}
window.addEventListener('resize', setZoom);
setZoom();
