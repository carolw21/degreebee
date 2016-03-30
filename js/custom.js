function animateCircle(speed, radius, startx, starty, phi) {  
    if (!phi) { phi = 0 };
    var int = 2 * (Math.PI) / speed;
    phi = (phi >= 2 * (Math.PI)) ? 0 : (phi + int);
    var $m = startx + (radius+150) * Math.cos(phi);
    var $n = starty + radius * Math.sin(phi);

    $('#bee').animate({
        marginLeft: $m + 'px',
        marginTop: $n + 'px'
      }, 1, function() { 
             animateCircle.call(this, speed, radius, startx, starty, phi) 
          }
    );

};

$(document).ready(function() {
    animateCircle(200, 150, 0, -60);
});
