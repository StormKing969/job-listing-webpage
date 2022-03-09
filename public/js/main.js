const choices = document.querySelectorAll(".choice")


choices.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element);
    })
});

