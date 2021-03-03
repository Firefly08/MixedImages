const onClick = document.querySelector(".button")

const jokes = [
    "What's the best thing about Switzerland?<br>I don't know, but their flag is a huge plus.",
    "Where do you find a cow with no legs?<br>Right where you left it.",
    "Why aren't koalas actual bears?<br>They don't meet the koalafications.",
    "What's the difference between a hippo and a zippo?<br>One is really heavy, and the other is a little lighter.",
    "What do Alexander the Great and Winnie the Pooh have in common?<br>Same middle name.",
    "What did the mayonnaise say when the refrigerator door was opened?<br>Close the door, I'm dressing.",
    "I used to be addicted to soap.<br>But I'm clean now.",
    "Did you hear about the restaurant on the moon?<br>Great food, no atmosphere!",
    "How many apples grow on a tree?<br>All of them!",
    "Did you hear the rumor about butter?<br>Well, I'm not going to spread it!",
    "I like telling Dad jokes.<br>Sometimes he laughs!",
    "To whoever stole my copy of Microsoft Office, I will find you.<br>You have my Word!",
    "They all laughed when I said I wanted to be a comedian.<br>Well, they're not laughing now!"
]

function getJoke() {
    let randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('displayJoke').innerHTML = jokes[randomNumber];
}

onClick.addEventListener("click", getJoke);