const makeLotto = document.querySelector("#makeLotto");
const hiddens = document.querySelectorAll(".hidden");
const bHiddens = document.querySelectorAll(".b-hidden");
const balls = document.querySelectorAll(".ball");
const resetBtn = document.querySelector("#resetBtn");
const rChoice = document.querySelector("#rChoice");
let cnt = 0;

makeLotto.addEventListener("click", () => {

  for(let hidden of hiddens){
    hidden.classList.remove("hidden");

    hidden.addEventListener("click", e => {
      if(e.target.classList.contains("ball-choice")){
        e.target.classList.remove("ball-choice");
        cnt--;
      }else{
        e.target.classList.add("ball-choice");
        cnt++;
      }
      
      if(cnt > 6){
        alert("6개 까지만 선택할 수 있습니다");
        e.target.classList.remove("ball-choice");
        cnt--;
        return;
      }
    });
  }
  for(let btn of bHiddens){
    btn.classList.remove("hidden");
  }
  
  makeLotto.classList.add("hidden");
});

resetBtn.addEventListener("click", () => {
  const choiceBalls = document.querySelectorAll(".ball-choice");
  
  for(let ball of choiceBalls){
    ball.classList.remove("ball-choice");
    cnt--;
  }
  
});

rChoice.addEventListener("click", () => {

  let interval  = setInterval(() => {
      rNum();
  }, 50);

  setTimeout(() => {
    clearInterval(interval);
  }, 1500);

});

function rNum(){

  for(let ball of balls){
    ball.classList.remove("ball-choice");
  }

  for(let i = 1; i <=6; i++){
    let rNum = Math.floor(Math.random()*45);
    balls[rNum].classList.add("ball-choice");
  }
};


