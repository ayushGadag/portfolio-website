let bt1= document.querySelector("button");
let mode = "light-mode";// the light mode 

bt1.addEventListener("click",() => {
    if (mode === "light-mode") {
        mode ="dark-mode";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        mode = "light-mode";
        document.querySelector("body").style.backgroundColor ="white";

    }

    console.log(mode);
})