

console.log("JavaScript is working! 💗");

const orderButton = document.querySelector("#orderme");

orderButton.addEventListener("click", function() {

    this.classList.remove("jump");

    void this.offsetWidth;

    this.classList.add("jump");

    setTimeout(() => {
        window.open("https://wa.me/923284757176", "_blank");
    }, 700);

});