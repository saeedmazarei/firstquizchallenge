// register check
const changeProgress = document.getElementById("pr-bars");
const loading = document.getElementById("loading");
const page = document.getElementById('holepage');

// loading
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    const startPage = document.getElementById('start');
    const landingPage = document.getElementById('landing');
    startPage.style.display = 'none';
    landingPage.style.display = 'block';
    getData();
    page.classList.remove('display');
    loading.classList.add('display');
})


// request to api for showing progress bar
let landingUrl = 'https://quizofkings.com/challenge-api/v1/challenge/landing'
let playerId = '?player_id=nj0pg9';
const urlParams = new URLSearchParams(playerId);
const url = urlParams.get('player_id');
landingUrl += `?hash_id=${url}&challenge=MedalOfHonor`;

const myGameButton = document.getElementById('my-game');
const gameTable = document.getElementById('games-popup');
const okButton = document.getElementById('ok-button');
const closeButton = document.getElementById('close-button');
myGameButton.addEventListener('click', ()=> {
    makeTable();
    gameTable.style.display = 'block';
    document.getElementsByTagName('header')[0].style.display = "none";
    page.style.display = "none";
    okButton.onclick = function() {
        gameTable.style.display = 'none';
        document.getElementsByTagName('header')[0].style.display = "block";
        page.style.display = "block";
    }
    closeButton.onclick = function() {
        gameTable.style.display = 'none';
        document.getElementsByTagName('header')[0].style.display = "block";
        page.style.display = "block";
    }
})

// make table
function makeTable() {
    const matchContainer = document.getElementById("match-container");
    let opponentName = ['saeed', 'reza.optic', 'it3reza', 'farid4510', 'zahra56', 'maryam70', 'narges48'];
    let matchResult = ['13/14 بردی', 'باختی', 'مساوی', 'بازی بدون اشتباه', 'مساوی', '15/10 باختی', 'مساوی'];
    let medalGet = [2, 4, 5, 1, 3, 5, 2];
    let matchNumber = 7;
    let matchItems = document.getElementById('matchitem');
    matchItems.style.display = 'none';
    for(let i=0; i < matchNumber; i++){
        let matchClone = matchItems.cloneNode(true);
        matchContainer.appendChild(matchClone); 
        matchClone.style.display = 'grid';
        matchClone.id = `match-items${i}`;
        document.getElementById(`match-items${i}`).querySelector('.result').querySelector('span').innerHTML = `${matchResult[i]}`;
        document.getElementById(`match-items${i}`).querySelector('.vs').querySelector('span').innerHTML = `${opponentName[i]}`;
        for(let j=0; j<medalGet[i]; j++){
            document.getElementById(`match-items${i}`).querySelectorAll('.star-pic')[j].classList.add('golden-medals');
        }
    }

}
