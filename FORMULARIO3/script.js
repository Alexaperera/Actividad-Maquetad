document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    const text = "Google";
    const colors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#EA4335", "#4285F4"];

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.color = colors[index % colors.length];
        logo.appendChild(span);
    });
});
