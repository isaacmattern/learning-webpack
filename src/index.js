import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughingEmoji from './assets/laughing-emoji.jpg'

const laughImg = document.getElementById('laughImg');
laughImg.src = laughingEmoji;

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()