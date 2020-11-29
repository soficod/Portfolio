export default function fade(type, ms, el) {
    var isIn = type === 'in',
        opacity = isIn ? 0 : 1,
        interval = 50,
        duration = ms,
        gap = interval / duration;
    
    if (isIn) {
        el.style.display = 'inline';
        el.style.opacity = opacity;
    }
    
    function func() {
        opacity = isIn ? opacity + gap : opacity - gap;
        el.style.opacity = opacity;
    
        if (opacity <= 0) el.style.display = 'none'
        if (opacity <= 0 || opacity >= 1) window.clearInterval(fading);
    }
    
    var fading = window.setInterval(func, interval);
}