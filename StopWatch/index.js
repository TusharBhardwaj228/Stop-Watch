/* let clickedButton = false; */

const strtbtn= document.querySelector('.js-start-btn');

const inputNumber = document.querySelector('.js-timer');

let number = JSON.parse(localStorage.getItem('number')) || 0;
inputNumber.innerText = number;

strtbtn.addEventListener('click', ()=>{
  startTimer();
});

let intervalID;
let startTimeClock = false;
function startTimer(){
  if(!startTimeClock){
    intervalID = setInterval(()=>{
      numberIncreament();
    },1000);
    changebtn();
    startTimeClock = true;
  }
  else{
    clearInterval(intervalID);
    changebtn();
    startTimeClock = false;
  }
}


function numberIncreament(){
  number = Number(inputNumber.innerText);
  number++;
  inputNumber.innerText = number;
  localStorage.setItem('number', JSON.stringify(number));
}

function changebtn(){
  if(!startTimeClock){
    strtbtn.classList.add('pause-btn');
    const pausebtn = document.querySelector('.pause-btn');
    pausebtn.innerText = 'Pause';
  //  clickedButton = true;
  }
  else{
    strtbtn.classList.remove('pause-btn');
    strtbtn.innerText = 'Start';
   // clickedButton = false;
  }
}

function resetTimer(){
  inputNumber.innerText = '0';
  clearInterval(intervalID);
  if(startTimeClock){
    changebtn();
    startTimeClock = false;
  }
  localStorage.removeItem('number'); 
}


