const body = document.querySelector("body");
body.style.color = "white";
function handleResizeWindow() {
  body.style.backgroundColor = "orange";

  if (window.innerWidth > 1300) {
    body.style.backgroundColor = "blue";
    console.log("top", window.innerWidth);
  } else if (window.innerWidth < 900) {
    console.log("bottom", window.innerWidth);
    body.style.backgroundColor = "purple";
  }
}

window.addEventListener("resize", handleResizeWindow);
