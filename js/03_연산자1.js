/* ***중요**** HTML 문서에서 얻어온 값의 자료형은 무조건 string(문자열)!! *****중요**** */

/* 계산기 동작 코드 */

// 전역 변수(어디서든 사용 가능한 변수)선언
// document : HTML 문서
// . (점 연산자) : 내부(하위) 접근 연산자
// get : 얻다
// element : 요소
// byId : id가 일치하는
// => 문서 내에서 id가 일치하는 요소 가져오기

// id가 일치하는 input 요소를 얻어와 변수에 저장
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

const calcResult = document.getElementById("calcResult");


// ** 얘는 전역변수라 html 파일 읽으면서 읽기 때문에 바로 value 로 가져오면 0으로 셋팅됨
const test1 = Number(input1.value);
const test2 = Number(input2.value);

/** DOC 주석, 함수 설명 작성용 주석 "/ + **" */

/** 더하기 함수 */
function plusFn(){
  
  // input1.value : #input 요소에 작성된 값 얻어오기
  
  // Number('숫자형태의 문자열') : '숫자형태 문자열' => 숫자로 변경
  // 단, '숫자형태 문자열'이 아닐 경우 NaN(Not a Number) 결과 반환
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log("두 수의 합 :",value1 + value2);
  
  // 결과 (#calcResult)의 내용(innerText)로 출력
  calcResult.innerText = value1 + value2;
}

/** 빼기 함수 */
function minusFn(){
  const value1 = input1.value;
  const value2 = input2.value;
  
  // 빼기는 Js에서는 자동으로 넘버로 바꿔서 빼준다.
  // 단, 이런거 일일이 외우기 어려우니까 연산할때는 그냥 Number 함수 이용해서 사용하는게 낫다.
  // console.log("두 수의 차 :",value1 - value2);
  console.log("test1 : ",test1);
  console.log("test2 : ",test2);
  console.log("test1 - test2 :",test1 - test2);

  calcResult.innerText = value1 - value2;
}

function multiFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  
  calcResult.innerText = value1 * value2;
}

function divFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  
  calcResult.innerText = value1 / value2;
}

function modFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  
  calcResult.innerText = value1 % value2;
}


// ---------------------------------------------------------------------------------------------

/* 산술 연산자 응용 */

const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const calcResult2 = document.getElementById("calcResult2");

/** 첫 번째 값 X 2 */
function doubleFn(){
  const value1 = Number(input3.value);
  
  calcResult2.innerText = value1 * 2;
}

/** 두 번째 값 제곱 */
function squareFn(){
  const value2 = Number(input4.value);
  
  calcResult2.innerText = value2 * value2;
  // calcResult2.innerText = Math.pow(value2,2);
}

/**  모든 산술 연산 결과 일괄 출력 */
function allOperationFn(){
  const v1 = Number(input3.value); /* 첫 번째 값 */
  const v2 = Number(input4.value); /* 두 번째 값 */
  
  // 각가의 연산 결과를 별도의 변수에 저장
  const plus  = v1 + v2;
  const minus = v1 - v2;
  const multi = v1 * v2;
  const div   = v1 / v2;
  const mod   = v1 % v2;
  
  // 요소.innerText = "문자열"
  // => <span>내용</span> 내용 부분에 "문자열" 대입(출력)
  // - HTML 코드 해석 X
  
  // 요소.innerHTML = "문자열"
  // => <span>내용</span> 내용 부분에 "문자열" 대입(출력)
  // - HTML 코드 해석 O
  calcResult2.innerHTML = 
    "<ul>" 
      + "<li> + 결과 : " + plus  + "</li>"
      + "<li> - 결과 : " + minus + "</li>"
      + "<li> * 결과 : " + multi + "</li>"
      + "<li> / 결과 : " + div   + "</li>"
      + "<li> % 결과 : " + mod   + "</li>"
    + "</ul>";
}

// ------------------------------------------------------------------------------------------
const countResult = document.getElementById("countResult");

/** 증감연사자를 이용해 1씩 증가하는 함수 */
function increase(){
  
  // 요소.innerText = "문자열"; // "문자열" 화면에 출력
  // 요소.innerText; // 요소에 작성된 내용 얻어오기

  // 1) countResult 에 작성된 내용(숫자) 얻어오기
  let count = Number(countResult.innerText);

  // 2) 얻어온 숫자를 1 증가 시켜 출력
  countResult.innerText = ++count;
}


/** 증감연사자를 이용해 1씩 증가하는 함수 */
function decrease(){
  // 요소.innerText = "문자열"; // "문자열" 화면에 출력
  // 요소.innerText; // 요소에 작성된 내용 얻어오기
  
  // 1) countResult 에 작성된 내용(숫자) 얻어오기
  let count = Number(countResult.innerText);
  
  // 2) 얻어온 숫자를 1 감소 시켜 출력
  countResult.innerText = --count; // 1 감소시켜 출력
}

// 연산이란?
// - 컴퓨터가 코드/값을 읽고, 실행하는 행위
// ex) +, -, *, /, %, ++, -- ...
// 변수에 값 대입, console 출력, innerText ...  모두 다


/** 전위/후위 연산 확인하기 */
function chekckFn(){
  let num = 100;
  
  // num 값이 1 증가한 후 console에 출력
  console.log("++num :", ++num);
  console.log("++num :", ++num);
  console.log("++num :", ++num);

  console.log("-----------------");

  // 후위 연산
  num = 100;

  console.log("num++ :", num++);
  console.log("num++ :", num++);
  console.log("num++ :", num++);
  console.log("num 확인 :",num);
  
  // 문제
  let a = 10;
  let b = 5;
  let c = ++a * b--;

  // 최종 a, b ,c 의 값은?
  // a = 11
  // b = 4
  // c = 55
  console.log("a :", a,"b :", b ,"c :" ,c);
}



