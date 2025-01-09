/** 인라인 이벤트 모델 확인 + this 확인 */

// 전달 인자(Argument) : 함수 호출 시 () 안에 작성하는 값
//                       함수 매개변수로 전달됨
// 매개 변수(parameter) : 함수 정의 시 ()에 작성하는 변수
//                        호출 시 전달된 값을 저장

function check1(div){
  // 매개 변수 div : 클린된 div 요소
  // console.log(div);

  /* 클릭이 되면 클린된 숫자를 버튼(div)에 출력 */

  // 1) 버튼에 작성된 내용 얻어오기
  const num = Number(div.innerText);

  // 2) 얻어온 내용이 숫자가 아닌 경우
  // isNaN(값) : 값이 NaN 인 경우 true, 숫자면 false
  
  if(isNaN(num)){ // 숫자가 아닌 경우
    div.innerText = 1;
    return;
  }

  // 3) 얻어온 내용이 숫자인 경우
  div.innerText = num + 1;

}

/* 고전 이벤트 모델 확인 */
// id가 "testA"인 요소를 얻어와 변수에 저장
// const testA = document.getElementById("testA");
const testA = document.querySelector("#testA");
/* 
  고전 이벤트 모델 작성법
  요소.이벤트리스너 = 이벤트 핸들러
*/
testA.onclick = function(){
  // testA 요소가 가지고 있는 
  // onclick 변수(이벤트 리스너)에 => 이벤트 리스너
  // function(){} 을 대입 => 이벤트 핸들러

  /* 고전 이벤트 모델에서 this == 이벤트가 발생한 요소 */
  console.log(this);
  alert("고전 이벤트 모델 확인됨");
};

/* 고전 이벤트 모델 제거 */
// #testB 버튼 클릭 시 #testA의 클릭 이벤트 핸들러 제거
const testB = document.querySelector("#testB");

testB.onclick = function(){
  // testA가 클릭 되었을 때의 동작(핸들러)을 null로 덮어씌움
  // => 이벤트 핸들러가 사라짐(제거)
  testA.onclick = null;

  alert("확인 버튼 클릭 이벤트 핸들러 제거");
}

/* 고전 이벤트 모델 단점 확인 */
const testC = document.querySelector("#testC");

// onclick 이벤트 리스너에 이벤트 핸들러 대입
testC.onclick = function(){
  testC.style.backgroundColor = "pink";
}

// onclick 이벤트 리스너에 이벤트 핸들러 다시 대입하면 덮어써져서 전에 핸들러가 무시됨
testC.onclick = function(){
  testC.style.fontSize = "40px";
}

const test1 = document.querySelector("#test1");

test1.addEventListener("click", function(){

  
  // opacity : 불투명 정도를 설정하는 속성
  // 0 : 투명
  // 1 : 불투명(선명하게 보임)
  let current = test1.style.opacity;
  
  console.log("현재 투명도 : "+ current);
  
  if(current === ""){
    current = 1; // 불투명
  }
  // 투명도를 0.05 감소
  test1.style.opacity = current - 0.05;
  
  // 투명도가 0 미만이 된 경우(완전히 투명해진 이후)
  if(test1.style.opacity < 0){
    test1.style.opacity = 1;
  }
});

test1.addEventListener("click", function(){

  // #test1에 작성된 내용 얻어와 숫자로 변경
  let num = Number(test1.innerText);

  // #test1에 num을 1 증가 시킨 값을 대입
  test1.innerText = ++num;

});