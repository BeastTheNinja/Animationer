document.getElementById("dialog").addEventListener("mouseover", function() {
    let newX = Math.random() * (window.innerWidth - this.clientWidth);
    let newY = Math.random() * (window.innerHeight - this.clientHeight);

    this.classList.add("moving"); // Tilføjer hoppe-animation
    setTimeout(() => this.classList.remove("moving"), 500); // Fjerner efter animation

    this.style.left = `${newX}px`;
    this.style.top = `${newY}px`;
});
