const btn = document.getElementById("enterBtn");

//const clickSound = new Audio("click.mp3");

btn.addEventListener("click", () => {

    clickSound.play();

    document.body.style.transition = "0.5s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "main_menu.html";
    }, 500);
});