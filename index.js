const page = document.querySelector("#page");
const link = page.querySelector("img");


function setColor() {
    const input = document.querySelectorAll("input")[0];
    page.style.color = input.value

}

function setLink () {
    const input = document.querySelectorAll("input")[1];
    link.setAttribute ("src", input.value)
}

function toggleUnderline () {
    page.classList.toggle("underline");
}

function toggleBold () {
    page.classList.toggle("bold");
}

function toggleItalic () {
    page.classList.toggle("italic");
}

function removeFormat () {
    page.classList.remove("underline", "italic", "bold", "gray-text", "mono", );
}

    var changeFont = function (font) {
    document.querySelector("#page").style.fontFamily = font.value;
}