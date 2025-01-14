/* window.setTimeout(함수, 지연시간(ms)) */
const check1 = document.querySelector("#check1");
check1.addEventListener("click", () => {

  console.log("바로 출력 되는 문자열");

  setTimeout(()=>{
    console.log("3초 후에 출력되는 문자열");
  }, 3000);

  setTimeout(() => {
    console.log("2초 후에 출력되는 문자열");
  },2000);

  setTimeout(() => {
    console.log("1초 후에 출력되는 문자열");
  },1000);
  
  setTimeout(() => {
    console.log("4초 후에 출력되는 문자열");
  },4000);
});

/* 
  setInterval(함수, 지연시간(ms)) : 지연시간이 흐른 후 함수 수행 (반복)
*/

// 즉시 실행 함수
(() => {
  const clock = document.querySelector("#clock");

  clock.innerText = new Date();

  // 1초마다 실행
  setInterval(()=>{
    clock.innerText = new Date();
  },1000);
})();

