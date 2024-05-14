function showEnglishBooks() {
    const congratsElement = document.getElementById("congrats-animation");
    const englishBooksElement = document.getElementById("english-books");

    congratsElement.style.display = "none";    
    englishBooksElement.style.display = "flex";    
}

function showMeme() {
    const englishBooksElement = document.getElementById("english-books");
    const memeElement = document.getElementById("meme");

    englishBooksElement.style.display = "none";
    memeElement.style.display = "flex";
}

function showTienBip() {
    const memeElement = document.getElementById("meme");
    const tienBipElement = document.getElementById("tien-bip");

    memeElement.style.display = "none";
    tienBipElement.style.display = "flex";
}