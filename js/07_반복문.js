/* for([1]초기식 ; [2]조건식 ; [4]증감식){

  [3] 조건식이 true 일 경우 수행할 코드;

} */
function check1(){
  
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);

  console.log("=====================================================");

  /* for 문 버전 */

  // num 값이 1부터 5까지 1씩 증가하는 동안 반복
  for(let num = 1; num <= 5 ; num++){
    console.log(num);
    // [초기식] let num = 1; 
    // => 1이 저장된 변수 num 을 선언

    // [조건식] num <= 5
    // => num 변수에 저장된 값이 5 이하면 true
    // => 반복 O == for문 {} 내부 코드를 수행해라

    // => num 변수에 저장된 값이 5 이하가 아니면 false
    // => 반복 x == for문 {} 내부 코드를 수행하지 말아라!
    
    // [증감식] num++
    // => num 변수에 저장된 값을 반복할 때 마다 1 증가
  }
}

/** 콘솔에 1부터 10까지 1씩 증가하며 출력하기 */
function check2(){
  for(let num = 1; num <= 10; num++){
    console.log(num);
  }
}

/** 콘솔에 5부터 13까지 1씩 증가하며 출력하기 */
function check3(){
  for(let num = 5; num <= 13; num++){
                  // num < 14
    console.log(num);
  }
}

/** 콘솔에 1부터 7까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check4(){
  let result = ""; // 결과를 저장할 변수에 ""(빈칸) 대입

  for(let num = 1; num <= 7; num++){
    result += num;
  }

  console.log(result);
}

/** 콘솔에 4부터 11까지 1씩 증가한 문자열을 한 줄로 출력하기 */
function check5(){
  let result = "";
  // result에 ""을 대입하는 이유
  // => 변수 선언 시 아무런 값도 대입하지 않으면 undefined
  // => undefined 는 산술 연산의 대상이 될 수 없음!
  // => 산술 연산을 수행하면 NaN(Not a Number) 결과가 반환됨

  for(let num = 4; num <=11; num++){
    result += num;
  }

  console.log(result);
}

/** 1부터 10까지 1씩 증가한 숫자의 합 구하기 */
function check6(){
  // check4,5 와 유사하지만 변수 선언 데이터 타입에 따라 결과 달라짐.
  let sum = 0; // 합계를 저장할 변수를 선언, 0을 대입
               // => 더하거나 뺏을 때 영향이 없는 숫자 0 대입

  for(let num = 1; num <= 10; num++){
    sum += num;
  }
  console.log(sum);
}

/** 입력 받은 값 사이 1씩 증가한 정수 값들의 합 구하기 */
function check7(){

  // 모든 값 입력 되어 있고
  // 입력 1이 입력 2보다 작다고 가정

  const inputA = Number(document.getElementById("input7a").value);
  const inputB = Number(document.getElementById("input7b").value);

  let sum = 0;
  
  for(let num = inputA ; num <= inputB; num++){
    sum += num;
  }

  alert(`${inputA}부터 ${inputB} 사이 정수 합 : ${sum}`);
}

/** 1부터 10까지 2씩 증가한 숫자 출력 + 합계 */
function check8(){
  let sum = 0;

  for(let num = 1 ; num <= 10; num += 2){
    sum += num;
    console.log(num);
  }
  console.log("합계 : " + sum);
}

/** 3부터 30까지 3의 배수만 출력 */
function check9(){
  // 1) 증감식 변경
  let result = "";
  
  for(let num = 3; num <= 30; num += 3){
    result += num + " ";
  }
  console.log(result);
}

// for문 + if 문
/** 3부터 30까지 3의 배수만 출력 */
function check10(){
  // 2) 조건식 변경
  let result = "";
  
  for(let num = 3; num <= 30; num++){
    
    if(num % 3 === 0){
      result += num + " ";
    }
  }
  console.log(result);
}

/** 입력 받은 범위 내 지정된 수의 배수를 출력하고, 합계 구하기 */
function check11(){
  const startV = Number(document.getElementById("start10").value);
  const endV = Number(document.getElementById("end10").value);
  const multipleV = Number(document.getElementById("multiple10").value);

  let result = "";
  let sum = 0;

  for(let num = startV; num <= endV; num++){
    if(num % multipleV === 0){
      console.log(num);
      result += num + " ";
      sum += num;
    }
  }
  console.log(`합계 : ${sum} 내용 : ${result}`);
}

/** 구구단 2단 출력하기 */
function check12(){
  // let multiNum = 0;
  
  // - 2단에 곱해지는 수가 1~9까지 1씩 증가
  // - 곱셈 결과가 1~9까지 1씩 증가한 수에 2를 곱한 값
  for(let num = 1; num <=9; num++){
    // multiNum = 2*num;
    // 변수 생성할 필요 없이 백틱 안에 *2 하면 됨.
    console.log(`2 X ${num} = ${num * 2}`);
  }
}

function check13(){
  const dan = document.getElementById("dan13");
  const danV = Number(dan.value);
  console.log(dan.value);

  // if(dan.value.length === 0){
  if(dan.value === ""){
    alert("단을 입력 해주세요.");
    return;
  }
  
  // if(!(2 <= danV && danV <= 9)){
  if(danV < 2 || 9 < danV){
    alert("2 ~ 9 단 사이만 입력 해주세요.");
    return;
  }

  for(let num = 1; num <= 9; num++){
    console.log(`${danV} X ${num} = ${danV * num}`);
  }

}

/** 10부터 1까지 1씩 감소하며 출력하기 */
function check14(){
  for(let num = 10; num >= 1; num--){
    console.log(num);
  }
}

/** 20부터 3까지 3씩 감소하며 출력하기 */
function check15(){
  for(let num = 20; num >= 3; num -= 3){
    console.log(num);
  }
}

/** 구구단 3단 거꾸로 출력하기 */
function check16(){
  for(let num = 9; num >= 1; num--){
    console.log(`3 X ${num} = ${3*num}`);
  }
}

/** 5의 배수마다 @, 10의 배수마다 줄 바꿈하면서 출력하기 */
function check17(){

  let result = "";

  for(let num = 1; num <= 100 ; num++){
    if(num % 5 === 0){
      result += "@ " ;
    }else{
      result += num + " ";
    }

    if(num % 10 === 0){
      result += "<br>"
    }
  }

  document.getElementById("result17").innerHTML = result;
}

function check18(){
  
  for(let row = 1; row <= 3; row++){
    let result = "";

    for(let col = 1; col <= 4; col++){
      result += col;
    }
    console.log(result);
    console.log("====");
  }
}

function check19(){

  for(let row = 1; row <= 4; row++){
    let result = "";

    for(let col = 1; col <= 5; col++){
      result += col;
    }
    console.log(result);
    console.log("====");
  }
}

function check20(){
  
  for(let row = 3; row >= 1; row--){
    let result = "";

    for(let col = 6; col >= 1; col--){
      result += col;
    }
    console.log(result);
    console.log("====");
  }
}

function check21(){

  for(let row = 1; row <= 5; row++){
    let result = "";

    for(let col = 1; col <= row; col++){
      result += col;
    }
    console.log(result);
  }
}

function check22(){
  // 방법1
  /*   for(let row = 3; row <= 7; row++){
    let result = "";

    for(let col = 3; col <= row; col++){
      result += col;
    }
    console.log(result);
  } */

  // 방법2
  for(let row = 1; row <= 5; row++){
    let result = "";

    for(let col = 1; col <= row; col++){
      result += col + 2;
    }
    console.log(result);
  }
}

function check23(){

  for(let row = 1; row <= 3; row++){
    let result = "";
    for(let col = 1; col <= row; col++){
      result += "*";
    }
    console.log(result);
  }

}

function check24(){
  const input = document.getElementById("input24");
  
  if(input.value.length === 0){
    alert("숫자를 입력해 주세요");
    return
  }

  const inputNum = Number(document.getElementById("input24").value);

  // 입력된 숫자가 0이하일 경우
  if(inputNum <= 0){
    alert("0보다 큰 수를 입력하세요.");
    return;
  }

  for(let row = 1; row <= inputNum; row++){
    let result = "";
    for(let col = 1; col <= row; col++){
      result += "*"
    }
    console.log(result);
  }
}

function check25(){
  /* 방법 1  
  for(let row = 1; row <= 4; row++){
    let result = "";
    for(let col = 4; col >= row; col--){
      result += "*";
    }
    console.log(result);
  } 
  */
  // 방법 2  
  for(let row = 1; row <= 4; row++){
    let result = "";
    for(let col = 1; col <= 5-row; col++){
      result += "*";
    }
    console.log(result);
  } 

  // 방법 3
  // for(let row = 4; row >= 1; row--){
  //   let result = "";
  //   for(let col = 1; col <= row; col++){
  //     result += "*";
  //   }
  //   console.log(result);
  // }
}

function check26(){
  let cnt = 0; // 처음에는 세어진게 없는 숫자 0 셋팅

  for(let num = 1; num <= 30; num++){
    if(num % 4 === 0){
      cnt++;
    }
  }

  console.log("몇개? " + cnt);
}

function check27(){
  const inputNum = Number(document.getElementById("input27").value);
  let cnt = 0;

  for(let num = 1; num <= 100; num++){
    if(num % inputNum === 0){
      cnt++;
    }
  }

  console.log(`1 ~ 100사이 ${inputNum}의 배수는 ${cnt}개 있습니다.`);
}

function check28(){
  let cnt = 1;

  for(let row = 1; row <= 3; row++){
    let str = "";
    for(let col = 1; col <= 4; col++){
      str += `${cnt++} ` ; // == cnt + " "  
    }
    console.log(str);
  }
}
/** prompt를 이용해서 입력 받은 숫자 모두 더하기 */
// 단, 취소를 누를 시 종료
// 누적된 합계를 alert로 출력
function check29(){
  
  // prompt("내용") : 입력이 포함된 알림창
  // - 확인 클릭 : 입력한 내용 반환
  // - 취소 클릭 : null 반환

  let sum = 0;
  let val; // prompt에 입력된 값을 저장할 변수
  
  //  while 테스트
  // let test = 1;
  // while(test <= 5){
  //   console.log(test);
  //   test++;
  // }

  while((val = prompt("숫자 입력(취소 클릭 시 종료)")) !== null){
    sum += Number(val);
  }
  
  alert(`합계 : ${sum}`);
}

function check30(){
  const gimbap      = 4000; 
  const ramen       = 4500;
  const donkkaseu   = 9000;

  // 메누별 주문 갯수
  let gCnt = 0;
  let rCnt = 0;
  let dCnt = 0;
  
  // prompt에 저장된 값을 저장할 변수
  let input; // undefined

  // input 변수에 저장된 값이 null이 아닐 경우 반복
  // (undefined랑 null 은 다름)
  while(input !== null){
    input = prompt("메뉴를 번호 입력(1.김밥 2.라면 3.돈까쓰)");
    switch (input) {
      case "1" : gCnt++ ;break;
      case "2" : rCnt++ ;break;
      case "3" : dCnt++ ;break;
      case null : alert("주문 완료!"); break;
      default : alert("잘못 입력 하셨습니다."); break;
    }
  }
  
  // innerHTML 사용 필요
  // 주문된 메뉴만 출력(cnt 변수에 저장된 값이 0 초과)
  
  let outputHTML = ''; // 출력할 html 코드가 포함된 문자열
  
  if(gCnt > 0){ // 김밥을 주문한 경우
    outputHTML += `<li>김밥 ${gCnt} : ${gCnt*gimbap}</li>`
  }
  
  if(rCnt > 0){ // 라면을 주문한 경우
    outputHTML += `<li>라면 ${rCnt} : ${rCnt*ramen}</li>`
  }
  
  if(dCnt > 0){ // 돈까스를 주문한 경우
    outputHTML += `<li>돈까스 ${dCnt} : ${dCnt*donkkaseu}</li>`
  }
  /* 합계 */
  const sum = (gimbap * gCnt) + (ramen * rCnt) + (donkkaseu * dCnt);
  
  outputHTML += `<li>합계 : ${sum}원</li>`
  
  document.getElementById("result30").innerHTML = outputHTML;
}
