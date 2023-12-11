document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const imageContainer = document.getElementById('imageContainer');
    let isDragging = false;

    overlay.addEventListener('mousedown', function (event) {
        isDragging = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', function () {
            isDragging = false;
            document.removeEventListener('mousemove', handleMouseMove);
        });
    });

    function handleMouseMove(event) {
        if (isDragging) {
            const newPosition = (event.clientX / window.innerWidth) * 100;
            overlay.style.left = `${newPosition}%`;
            imageContainer.style.clipPath = `inset(0 0 0 ${newPosition}%)`;
        }
    }
});
