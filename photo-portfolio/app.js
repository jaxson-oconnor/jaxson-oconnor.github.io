document.querySelector("#about").addEventListener("click", () => {
    document.querySelector(".about").scrollIntoView({behavior: "smooth"});
});
document.querySelector("#contact").addEventListener("click", () => {
    document.querySelector(".contact").scrollIntoView({behavior: "smooth"});
});
document.querySelector("#my-work").addEventListener("click", () => {
    document.querySelector(".my-work").scrollIntoView({behavior: "smooth"});
});

document.addEventListener("keydown", (e) => {
    console.log(e.code);
    e.preventDefault();
    if (e.code == "ArrowUp") {
        document.querySelectorAll("img").forEach(element => {
            element.style.width = "calc(50% - 40px)";
        });
    } else if (e.code == "ArrowDown") {
        document.querySelectorAll("img").forEach(element => {
            element.style.width = "calc(30%)";
            element.style.marginTop = "40px";
        });
    }
});

setTimeout(() => {
    document.querySelector(".tip").style.display="none";
}, 8000);