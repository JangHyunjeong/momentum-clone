const gameForm = document.querySelector('.gameForm');
const maxNumInput =  document.querySelector('.maxNumInput');
const myNumInput = document.querySelector('.myNumInput');
const myNumArea = document.querySelector('.myNumArea');
const machineNumArea = document.querySelector('.machineNumArea');
const resultWrap = document.querySelector('.resultWrap');
const resultArea = document.querySelector('.resultArea');

const HIDDEN_CLASSNAME = 'hidden';


function numGame(e){
    e.preventDefault();
    const maxNum =  maxNumInput.value; 
    const machineNum = Math.round(Math.random() * maxNum);
    const myNum = myNumInput.value;

    //console.log(typeof(machineNum), typeof(myNum));
    //console.log(maxNum.length);
    //console.log(maxNum);

    if(maxNum === '' || myNum === '' ){
        alert('you must write a number');
    } else if (parseInt(maxNum) < parseInt(myNum)) {
        alert("you cant't write over max number")
    } else {
        showResult(parseInt(maxNum),parseInt(myNum),parseInt(machineNum));
    }


    
}

function showResult(maxNum,myNum,machineNum) {
    resultWrap.classList.remove(HIDDEN_CLASSNAME);
    myNumArea.innerText = myNum;
    machineNumArea.innerText = machineNum;

    if ( machineNum === myNum) {
        resultArea.innerText = "You Win";
    } else {
        resultArea.innerText = "You lose";
    }
}

gameForm.addEventListener('submit',numGame);


