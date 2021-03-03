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
    let img = images[randomNumber];
    let imgStr = '<img src="' + img + '" alt = "">';
    document.getElementById('displayImg').innerHTML = imgStr;
    
}

onClick.addEventListener("click", getImage);

/*
var random_images_array = ['smile.gif', 'frown.gif', 'grim.gif', 'bomb.gif'];

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor(Math.random() * imgAr.length);
    var img = imgAr[num];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr);
    document.close();
}
*/