// 0. 판 수 셋팅 ok

// 1. 내가 입력한 값 ok 

// 2. Math.random 으로 컴퓨터 값 셋팅 ok 

// 3. 승무패 값 비교

// 4. 오른쪽 창에 값 비교해서 승 무 패 넣어주기

// 5. 밑에 승무패 낸 값들 append 해주기

///////////////////////////////////////////////////////////////

/* 판수 셋팅 */
let gemeCnt = 0;
// 판 수 컨트롤 cnt
let cnt = 0;
let winCnt = 0;
let loseCnt = 0;
let drawCnt = 0;

const startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", () => {
  // cnt 리셋
  cnt = 0;
  winCnt = 0;
  loseCnt = 0;
  drawCnt = 0;

  gemeCnt = prompt("진행할 판 수를 입력하세요.");
  
  if(gemeCnt === null){
    
    alert("숫자 입력 후 확인을 눌러주세요");
    return;
  }else{
    gemeCnt = Number(gemeCnt);
    // 승무패 테이블 비우기
    const scoreTable = document.querySelector("#score").children;
    for(score of scoreTable){
      score.innerHTML ="0";
    }

    // 승무패 밑에 경기 히스토리 지우기
    const gameHistorys = document.querySelectorAll("#gameHistory > li");
    for(let gameHistory of gameHistorys){
      gameHistory.remove();
    }
  }
});

/* 내가 입력한 값 */
const userValBtns = document.querySelector(".user-btn").children;
let userVal = "";
let result = "";

for(let userValBtn of userValBtns){
  userValBtn.addEventListener("click", e => {

    if(gemeCnt === 0 || gemeCnt === null){
      alert("GAME START 버튼을 눌러 게임을 시작해 주세요!!!");
      return;
    }

    if(cnt < gemeCnt){
      cnt++;
      const comVal = Math.floor(Math.random()*3 + 1);
      let comResult = "";
      switch(comVal){
        case 1 : comResult="가위" ;
        document.querySelector("#com").src = "images/가위R.png";

        break;
        case 2 : comResult="바위"; 
        document.querySelector("#com").src = "images/바위R.png";

        break;
        case 3 : comResult="보"; 
        document.querySelector("#com").src = "images/보R.png";

        break;
      }
      // 선택한 가위바위보
      let userVal = e.target.innerText;
      // 승무패 테이블
      const scoreTable = document.querySelector("#score").children;
      // 결과 히스토리 상위 ul
      const gameHistory = document.querySelector("#gameHistory");
      
      // 1:가위 2:바위 3:보
      if(userVal === "가위"){
        document.querySelector("#user").src = "images/가위L.png";
        
        if(comVal === 1){
          result = "무승부";
        }else if(comVal === 2){
          result = "패배";
        }else{
          result = "승리"
        } 
      }else if(userVal === "바위"){
        document.querySelector("#user").src = "images/바위L.png";
        if(comVal === 1){
          result = "승리";
        }else if(comVal === 2){
          result = "무승부";
        }else{
          result = "패배"
        }
      }else{
        document.querySelector("#user").src = "images/보L.png";
        if(comVal === 1){
          result = "패배";
        }else if(comVal === 2){
          result = "승리";
        }else{
          result = "무승부"
        }
      }
      // class ="win" span, 낸거 span, 컴퓨터 span 
      const span1 = document.createElement("span");
      switch(result){
        case "승리" : 
          span1.className="win";
          span1.innerHTML="WIN";
          
          scoreTable[0].innerHTML = ++winCnt;
        break;

        case "무승부" : 
          span1.className="draw";
          span1.innerHTML="DRAW";
          scoreTable[1].innerHTML = ++drawCnt;
        break;
        
        case "패배" : 
          span1.className="lose";
          span1.innerHTML="LOSE";
          scoreTable[2].innerHTML = ++loseCnt;
        break;
      }

      const li = document.createElement("li");
      const span2 = document.createElement("span");
      const span3 = document.createElement("span");
      const vs = document.createTextNode(" VS "); 
        
      span2.innerHTML=userVal;
      span3.innerHTML=comResult;
      li.append(span1,span2,vs,span3);
      document.querySelector("#gameHistory").append(li);
    }else{
      alert("게임이 종료 되었습니다. 다시 하시려면 GAME START 버튼을 눌러주세요.");
      return;
    }
  });
}

