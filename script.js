// Função para animação ao rolar a página
document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".container");
    const screenHeight = window.innerHeight;

    elements.forEach(element => {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - screenHeight <= 0) {
            element.classList.add("fade-in");
        }
    });
});
