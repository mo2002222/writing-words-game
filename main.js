//catch selector
let startbtn = document.querySelector('.start');
let lvlNameSpan = document.querySelector('.message .lvl');
let secondSpan = document.querySelector('.message .second');
let theWord = document.querySelector('.the-word');
let upcomingWords = document.querySelector('.upcoming-words');
let input = document.querySelector('.input');
let timeLeftSpan = document.querySelector('.time span');
let scoreGot = document.querySelector('.score .got');
let scoreTotal = document.querySelector('.score .total');
let finishMessage = document.querySelector('.finish');
let easybtn = document.querySelector('.easy');
let normalbtn = document.querySelector('.normal');
let hardbtn = document.querySelector('.hard');
let allert = document.querySelector('.game .allert'); 

//array of words

//setting level name

let DefaultLevelName = lvlNameSpan.innerHTML;
let DefaultLevelTime = secondSpan.innerHTML; 
scoreTotal.innerHTML = '25';
let wordlvl =[];
//setting level
const levels = {
    'Easy' : 4,
    'Normal' : 4,
    'Hard' : 4
}
//levels buttons
easybtn.onclick = function () {
    let mood = "Easy";
    lvlNameSpan.innerHTML = mood;
    secondSpan.innerHTML = levels.Easy;
    timeLeftSpan.innerHTML= levels.Easy;
    let eas = [
        'Small',
        'Boy',
        'Hand',
        'Red',
        'Girl',
        'Mam',
        'Dad',
        'Green',
        'Cat',
        'Dog',
        'Sea',
        'Nile',
        'Club',
        'Visit',
        'Life',
        'World',
        'Cammel',
        'Menu',
        'Kamel',
        'Caw',
        'Happy',
        'Gray',
        'Drink',
        'All',
        'Mother',
    ];
    wordlvl = eas;
    allert.parentElement.style.display = 'none';
};
normalbtn.onclick = function () {
    let mood = "Normal";
    lvlNameSpan.innerHTML = mood;
    secondSpan.innerHTML = levels.Normal;
    timeLeftSpan.innerHTML= levels.Normal;
    let norm =  [
        'Abroad',
        'Casual',
        'Around',
        'Couple',
        'Caught',
        'Arrive',
        'Course',
        'Access',
        'Center',
        'Artist',
        'Covers',
        'Believe',
        'Chance',
        'Action',
        'Active',
        'Actual',
        'Choice',
        'Attack',
        'Danger',
        'Balance',
        'Calling',
        'Capital',
        'Caption',
        'Advance',
        'Caution',
    ]
    wordlvl =norm;
    allert.parentElement.style.display = 'none';
};
hardbtn.onclick = function () {
    let mood = "Hard";
    lvlNameSpan.innerHTML = mood;
    secondSpan.innerHTML = levels.Hard;
    timeLeftSpan.innerHTML= levels.Hard;
    let har = [
        'Javascript',
        'Understand',
        'Goalkeeper',
        'Strawberry',
        'Abstract',
        'Absolute',
        'Revolutionary',
        'Nostalgic',
        'Abcoulombs',
        'Blackjacks',
        'Bachelorly',
        'Birthday',
        'Chimpanzee',
        'Chiffchaff',
        'Carjacking',
        'Backfiring',
        'Backfilled',
        'Backfields',
        'Backpacked',
        'Blackcocks',
        'Abjections',
        'Abbotships',
        'Carboxylic',
        'Chiffchaff',
        'Backronyms',
        
    ];
    wordlvl = har;
    allert.parentElement.style.display = 'none';
};


        input.onpaste = function () {
            return false;
        };
        startbtn.onclick = function () {
            if (lvlNameSpan.innerHTML !=='') {
                this.remove();
            input.focus();
            //generat word function
            genWords();
            }else{
                allert.style.fontSize = '20px'
                allert.style.color = '#0600b4'
                allert.parentElement.style.fontWeight = 'bold'

            }
            
        };
        function genWords() {
            // get random word from arry
            let randomword = wordlvl[Math.floor(Math.random() * wordlvl.length)];
            // git word index
            let wordindex = wordlvl.indexOf(randomword);
            // remove index from arry 
            wordlvl.splice(wordindex,1);
            theWord.innerHTML= randomword;
            // empty upcoming 
            upcomingWords.innerHTML = '';
            //generate up comming word
            for (let i = 0; i < wordlvl.length; i++) {
                let div = document.createElement('div');
                let txt = document.createTextNode(wordlvl[i]);
                div.appendChild(txt);
                upcomingWords.appendChild(div);
            }
            //call start play function
            startPlay();    
        }
        function startPlay() {
            timeLeftSpan.innerHTML = DefaultLevelTime;
            timeLeftSpan.innerHTML =secondSpan.innerHTML ;
            
            let start = setInterval(()=>{
                timeLeftSpan.innerHTML--;
                if (timeLeftSpan.innerHTML === '0') {
                    clearInterval(start);
                    if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                        //empty input field
                        input.value = '';
                        //increase score
                        scoreGot.innerHTML++;
                        if (wordlvl.length > 0) {
                            genWords();
                        }else{
                            let span = document.createElement('span');
                            span.className = 'good';
                            let spantxt = document.createTextNode('congratulations');
                            span.appendChild(spantxt);
                            finishMessage.appendChild(span);
                            // remove upcomming words
                            upcomingWords.remove();
                            input.innerHTML = '';
                        }
                    }else{
                        let span = document.createElement('span');
                        span.className = 'bad';
                        let spantxt = document.createTextNode('Game Over');
                        span.appendChild(spantxt);
                        finishMessage.appendChild(span);
                    }
                }
            },1000);
            
        }
