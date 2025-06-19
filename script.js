let bt1= document.querySelector("button");
let mode = "light-mode";// the light mode 

bt1.addEventListener("click",() => {
    if (mode === "light-mode") {
        mode ="dark-mode";
    } else {
        mode = "light-mode";

    }

    console.log(mode);
})