const onClick = document.querySelector(".button")

const images = [
    "images/imgJoke01.jpg",
    "images/imgJoke02.jpg",
    "images/imgJoke03.jpg",
    "images/imgJoke04.jpg",
    "images/imgJoke05.jpg",
    "images/imgJoke06.jpg",
    "images/imgJoke07.jpg"
]

function getImage() {
    let randomNumber = Math.floor(Math.random() * (images.length));
    document.getElementById('displayImg').innerHTML = images[randomNumber];
}

onClick.addEventListener("click", getImage);