const onClick = document.querySelector(".button")

const images = [
    "images/imgJoke01.jpg",
    "images/imgJoke02.jpg",
    "images/imgJoke03.jpg",
    "images/imgJoke04.jpg",
    "images/imgJoke05.jpg",
    "images/imgJoke06.jpg",
    "images/imgJoke07.jpg",
    "images/imgJoke08.jpg"
]

function getImage() {
    let randomNumber = Math.floor(Math.random() * (images.length));
    let img = images[randomNumber];
    let imgStr = '<img src="' + img + '" alt = "">';
    document.getElementById('displayImg').innerHTML = imgStr;
    
}

onClick.addEventListener("click", getImage);