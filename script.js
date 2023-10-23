let btn = document.querySelector(".btn");
let inp = document.querySelector(".ask");
let img = document.querySelector(".qr");

function handleEnterKey(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    getQr();
  }
}
inp.addEventListener("keydown", handleEnterKey);

function getQr() {
  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    inp.value;
  img.classList.remove("hidden");
}
