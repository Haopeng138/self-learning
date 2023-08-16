const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const slide = document.querySelector("#slide");

let openClik = true;

rightButton.addEventListener("click", () => {
    if (openClik) {
        openClik = false;
        console.log("right");
        const items = document.querySelectorAll(".item");
        slide.appendChild(items[0]);
        setTimeout(() => {
            openClik = true;
        }, 1000);
    }
});

leftButton.addEventListener("click", () => {
    if (openClik) {
        openClik = false;
        console.log("left");
        const items = document.querySelectorAll(".item");
        slide.prepend(items[items.length - 1]);
        setTimeout(() => {
            openClik = true;
        }, 1000);
    }
});

const titleTextArr = [];
const hbText = document.querySelector(".hb-text");
const titleText = "Happy Birthday YuYi ! 🎂";

const writeText = (text, type) => {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            if (type === "write") {
                titleTextArr.push(text[i]);
            } else {
                titleTextArr.pop();
            }
            if (i === titleText.length - 1) {
                setTimeout(() => {
                    writeText(text, type === "write" ? "wipe" : "write");
                }, 2000);
            }
            hbText.innerHTML = "🎂" + titleTextArr.join("") + "🎂";
        }, i * 500);
    }
};

writeText(titleText, "write");

