// Retro radio controls animation
document.addEventListener('DOMContentLoaded', () => {
    const dials = document.querySelectorAll('.radio-dial');
    const buttons = document.querySelectorAll('.vintage-button');
    let rotation = 0;

    // Animate dials on click
    dials.forEach(dial => {
        dial.addEventListener('click', () => {
            rotation += 45;
            dial.style.transform = `rotate(${rotation}deg)`;
        });
    });

    // Random button animations
    function animateRandomButton() {
        const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
        randomButton.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            randomButton.style.transform = 'scale(1)';
        }, 200);
    }

    // Start random button animations
    setInterval(animateRandomButton, 1500);
}); 