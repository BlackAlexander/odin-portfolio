function changeClass(element) {
    element.classList.add("fa-bounce");
}

function changeClassBack(element) {
    element.classList.remove("fa-bounce");
}

function adjustBrightness() {
    let brightnessValue;
    if (window.innerWidth > 1000){
        brightnessValue = 0;
    } else if (window.innerWidth < 750) {
        brightnessValue = 10;
    } else {
        brightnessValue = -(0.4)*(window.innerWidth)+400;
        brightnessValue /= 10;
    }
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.style.filter = `brightness(${brightnessValue})`;
    });
}

adjustBrightness();
window.addEventListener('resize', adjustBrightness);

