function turnRed(className) {
    if (document.body.classList.length === 1) {
        document.body.classList.remove(document.body.classList[0])

    }
    document.body.classList.add(className);

}
function turnWhite(className) {
    if (document.body.classList.length === 1) {
        document.body.classList.remove(document.body.classList[0])

    }
    document.body.classList.add(className);
}
