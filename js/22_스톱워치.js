const display = document.querySelector("#display");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

// 분, 초, 1/100초를 출력하는 span
const timeList = document.querySelectorAll("#display > span");

let count = 0; // 1/100 초마다 1씩 증가
// count = 10000 => 100초 => 1분 40초 00
// 1초 = count 100 => 1초

/* 
  START 버튼이 클릭된 경우 
  - START <=> PAUSE 버튼으로 변경
  - START가 클릭된 경우 10ms 마다 count가 1씩 증가
  - count 증가 후 화면에 시간을 계산해서 출력(별도 함수)


*/
// START 버튼 클릭 시 수행되는 setInterval() 저장 변수
let currentInterval; 

startBtn.addEventListener("click", () => {

  if(startBtn.innerText === "PAUSE"){
    startBtn.innerText = "START";
    recordBtn.disabled = true; // 비활성화
    // setInterVal()을 없애야 함
    // => clearInterval() 이용

    clearInterval(currentInterval);
    return;
  }

  // startBtn.innerText === "START" 인 경우
  startBtn.innerText = "PAUSE"; // 일시 정지로 버튼 변경
  recordBtn.disabled = false; // 비활성화 취소 => 활성화

  /* START가 클릭된 경우 10ms 마다 count가 1씩 증가 */
  currentInterval = setInterval(() => {
    count++;
    displayOutput();
  },10);

});

/* 
  reset 버튼이 클릭된 경우
  - START 버튼 형태로 변경
  - RECODE 버튼 비활성화
  - count = 0;
  - clearInterval() 수행
  - 화면 숫자 00:00:00 으로 셋팅(얘는 별도 함수로 할거임)
  - recordContainer에 기록된 내용 모두 삭제
*/
resetBtn.addEventListener("click", () => {
  
  startBtn.innerText = "START";
  clearInterval(currentInterval);
  recordBtn.disabled = true; 
  count = 0; // 시간 계산 변수 0으로 초기화
  recordContainer.innerHTML = "";

  displayOutput();
});

// ===========================================================================

/** 
 * 전달 받은 수가 10 미만이면 앞에 "0"을 붙여 반환하는 함수 
 * @param num : 숫자
 * */
function attachZero(num){
  if(num < 10) return "0"+num;
  return num + ""; // string 타입으로 변환
}

/** 
 * 시계 화면 출력 함수
 *  - count 값을 계산하여 분,초,1/100초 출력
 * 
 * 
 */
function displayOutput(){

  // 화면에 출력될 시간 분, 초, 1/100초 계산 후 변수에 저장
  const minute = attachZero(Math.floor(count / 100 / 60));
  const second = attachZero(Math.floor(count / 100 % 60));
  // const minute = Math.floor((Math.floor((count/100))/60));
  // const second = Math.floor((count/100))%60;
  const ms     = attachZero(count%100);

  // 화면 출력

  // minute 변수에 저장된 값과
  // 현재 화면에 출력된 내용이 다를 경우
  if(minute !== timeList[0].innerText){
    timeList[0].innerText = minute;
  }
  
  if(second !== timeList[1].innerText){
    timeList[1].innerText = second;
  }

  // ms 단위는 계속 변하기 때분에 if 필요 x
  timeList[2].innerText = ms;

}

// ================================================================================
/* 
  RECORD 버튼 클릭 시
  - #display에 작성된 내용을 모두 읽어와
  <li>읽어온 시간</li> 형태를 만들어
  #recordContainer의 마지막 자식으로 추가
*/
recordBtn.addEventListener("click", () => {
  
  // console.log(display.innerText);
  // console.log(display.innerHTML); => 태그까지 모두 얻어옴
  /* li 태그 생성 */
  const li = document.createElement("li");
  li.innerText = display.innerText; // 현재 시간을 li 내용으로 추가

  recordContainer.append(li);

});

/* 
  clearInterval() 사용 방법

  1. setInterval() 수행 후 반환 되는 값을 변수에 대입
    ex) const currentInterval = setInterval();

  2. clearInterval(변수명) 수행
    ex) clearInterval(currentInterval); // 동작이 멈춤
*/