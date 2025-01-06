/** if 예제 - 양수 인지 검사 */
function check1(){
  
  // id가 "input1"인 요소를 얻어와 in1 상수에 저장
  const in1 = document.getElementById("input1");

  // id가 "input1"인 요소의 작성된 값을 얻어와 숫자로 변환하여
  // val 상수에 저장
  const val = Number(in1.value);

  // 양수가 맞는지 검사
  if(0 < val){
    alert(`${val}은 양수입니다~`);
  }
  
  // 양수가 아닌 경우
  if(val <= 0){
    alert(`${val}은 양수가 아닙니다~`);
  }
}

/** 1 ~ 100 사이에 난수 발생 */
function check2(){

  // 난수 발생 : Math.random();
  //  => 0.0 <= 난수 < 1.0
  //  => 1 ~ 100 사이에 난수 발생시키려면
  //  => 0.0 <= 난수 < 1.0
  //    양쪽에 * 100
  //  => 0.0 <= 난수 < 1.0
  //  => 0.0 <= 난수*100 < 100.0
  //    100 이 나오게 하기 위해 양쪽에 + 1
  //  => 1.0 <= 난수*100 + 1 < 101.0
  //    범위가 1.0에서 100.99999 사이에 범위 생김
  //    내림 처리 : Math.floor(실수);
  //  Math.floor(Math.random() * 100 + 1) 하면 1 ~ 100 사이 난수 나옴

  const randomNumber = Math.floor(Math.random()* 100 + 1);

  if(randomNumber % 2 === 1){
    alert(`${randomNumber}은/는 [홀수] 입니다.`);
  }else{
    alert(`${randomNumber}은/는 [짝수] 입니다.`);
  }
}

/** 양수, 음수, 0 판별기 */
function check3(){
  const input3 = document.getElementById("input3");
  
  const val = input3.value;
  let result; //결과를 저장할 변수 선언 (현재 undefined 상태)

  if(val < 0){
    result = "음수";
  }
  
  else if(0 < val){
    result = "양수";
  }
  
  else{
    result = "0";
  }

  // if / else if / else 에 모두 result 값 대입 코드 작성
  // => 무조건 result 에는 값이 대입되도록 되어있다.
  alert(`${val}은/는 ${result} 입니다.`);

}

/** 실습문제 */
function ageCheck(){

  const age = document.getElementById("inputAge");

  const val = age.value;
  let   grade;

  if(0 <= val && val <= 13){
    grade = "어린이";
  }
  
  else if(14 <= val && val <= 19){
    grade = "청소년";
  }

  else if(20 <= val && val <= 120){
    grade = "성인"
  }

  if((0 <= val && val <= 120) && val != ""){
    alert(`${grade}입니다.`);
  }

  else {
    alert("잘못 입력 하셨습니다.");
  }
}

/** 연습문제 강사님 방법 */
function ageCheck2(){

  const inputAge = document.getElementById("inputAge");
  const age = Number(inputAge.value); // 입력 받은 나이
  let result ;

  // 잘못 입력된 경우
  if((age < 0 || age > 120) || age == ""){
    result = "잘못 입력 하셨습니다.";
  }else if(age <= 13){
    result = "어린이";
  }else if(age <= 19){
    result = "청소년"
  }else{
    result = "성인"
  }

  alert(result);

}

function check4(){
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  
  /* 
    input 요소에 작성된 값 얻어오기 : input요소.value
    html 요소에 작성된 내용 얻어오기 : html요소.innerText
  */
  
   // 1) A, B 중 하나라도 입력되지 않을 경우
   // => "입력되지 않은 값이 존재합니다."
   // inputA 또는 inputB 중 하나라도 입력되지 않은 경우
  if(inputA.value.length === 0 || inputB.value.length === 0){
    alert("입력되지 않은 값이 존재합니다.");
      
    return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
    // => 함수를 수행할 수 없는 상태여서 미리 종료
  }
    
  // 2) A가 B보다 작을 경우
  // => "A가 B보다 작습니다."
    
  const val1 = Number(inputA.value);
  const val2 = Number(inputB.value);
  
  if(val1 < val2){
    alert("A가 B보다 작습니다.");
      
    return;
  }
  
  // 3) A가 B 보다 클 경우
  // => 배수 판별 수행
  if(val1 % val2 === 0){ // A가 B의 배수가 맞을 경우
    alert(`${val1}은 ${val2}의 배수가 맞습니다.`);
    
    return;
  }

  alert(`${val1}은 ${val2}의 배수가 아닙니다.`);
}

/** 입력된 수가 3,4,5가 맞는지 확인 */
function check5(){
  const input5 = document.getElementById("input5");
  
  // 입력된 값이 없을 경우
  if(input5.value.length === 0){
    alert("숫자를 입력해주세요.");

    return;
  }

  let result; // 결과 저장용 변수

  switch(Number(input5.value)){
    case 3 : result = "3이 입력 되었습니다."; break;
    case 4 : result = "입력된 숫자는 4 입니다."; break;
    case 5 : result = "5를 입력하셨습니다"; break;
    default : result = "3,4,5 가 아닌 다른 숫자가 입력 되었습니다."; break;
  }

  alert(result);
  
  /* switch문 => if else 문으로 변경 */

  let result2;
  const val1 =  Number(input5.value);

  if(val1 === 3){
    result2 = "3이 입력 되었습니다."
  }else if(val1 === 4){
    result2 = " 입력된 숫자는 4입니다."
  }else if(val1 === 5){
    result2 = "5를 입력하셨습니다."
  }else{
    result2 = "3,4,5가 아닌 다른 숫자가 입력 되었습니다."
  }

  alert(result2);
}

// 매개 변수 (Parameter)
// - 함수가 호출 될 때 전달된 값(전달 인자, Argument)을 저장하기 위한 변수
/** switch 문을 이용한 계산기 */
function calc(op){
  // console.log("매개 변수 op 확인 :", op, typeof op);

  // 숫자가 입력되는 input 요소 얻어와 변수에 저장
  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");

  // 숫자가 둘 중 하나라도 입력되지 않은 경우
  if(number1.value === "" || number2.value === ""){
    alert("숫자를 모두 입력 해주세요.");

    return;
  }

  // number 타입으로 입력받은 값 변경
  const n1 = Number(number1.value);
  const n2 = Number(number2.value);

  // 전달 받은 매개 변수(op) 값에 따라 서로 다른 연산 수행
  let result;
  switch(op){
    // 전달 받은 매개 변수가 '+' 인 경우
    case '+' : result = n1 + n2; break;
    case '-' : result = n1 - n2; break;
    case '*' : result = n1 * n2; break;
    case '/' : result = n1 / n2; break;
    case '%' : result = n1 % n2; break;
    default : result = "잘못된 연산자"
  }

  document.getElementById("calcResult").innerHTML = result;
}

/** 입력 받은 월(달)의 알맞은 계절 출력(break; 관련 예제) */
function check6(){
  const input6 = document.getElementById("input6");

  if(input6.value.length === 0){
    alert("월(달)을 입력해 주세요");

    return;
  }

  let result;
  // break (멈추다) : 현재 case 까지만 해석하고 switch 문을 멈추
  // => break 미작성 시 현재 case 수행 후 멈추지 않고 다음 case를 연달아서 수행 (break 또는 switch 끝 '}'을 만날 때 까지 수행)
  // switch(Number(input6.value)){
  //   case 3,4,5 : result = "봄"; break;
  //   case 6,7,8 : result = "여름"; break;
  //   case 9,10,11 : result = "가을"; break;
  //   case 12,1,2 : result = "겨울"; break;
  //   default : result = "잘못 입력";
  // }
  // => 이건 자바에서만 가능하고 JS 에서는 지원하지 않는 기능(3,4,5 이렇게 입력하는건 안됨)

  switch(Number(input6.value)){
    case 3: case 4 : case 5 : result = "봄"; break;

    case 6: case 7: case 8:  result = "여름"; break;

    case 9: case 10: case 11: result = "가을"; break;

    case 12: case 1: case 2: result = "겨울"; break;

    default : result = "잘못 입력";
  }

  alert(result);
}