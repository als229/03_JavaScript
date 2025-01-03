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