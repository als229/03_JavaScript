/** break 확인  */
function check1(){
  const stopNumber = Number(prompt("1 ~ 20 사이 멈추고 싶은 숫자 입력"));

  for(let num = 1; num <= 20; num++){

    console.log(num)

    if(num === stopNumber){// num 과 입력 받은 수가 같을 때
      break; // 반복 멈춤(for문 종료)
    }
  }
}

/** 무한 반복 멈추기 */
function check2(){
  let num =1;
  while(true){ // 무한반복
    console.log(num++);

    if(num === 100){
      break;
    }
  }
}

/** 무한 반복 멈추기2 */
function check3(){
  // prompt에 취소가 입력될 때 까지 숫자를 입력 받아 합계 구하기

  let sum = 0;

  while(true){
    const value = prompt("숫자 입력(취소 시 종료)");

    if(value === null){
      break;
    }
    // if 수행 x === 확인 클릭
    sum += Number(value);
  }

  alert(`합계 : ${sum}`);
}

/** 중첩 반복문에서 break(분기문 작용 범위) */
function check4(){
  
  for(let num = 1; num <= 3; num++){
    let result = "";
    for(let num2 = 1; num2 <= 5; num2++){
      result += num2;

      if(num2 === 4){ // 4일때 멈춤
        break; // 안쪽 for 문에 작용
      }
    }
    console.log(result);
    console.log("---------");
    
    if(num === 2){
      break; // 바깥 쪽 for문에 작용
    }
  }
}

/** continue 확인하기 */
function check5(){
// 1부터 20까지 1씩 증가하는 반복문을 출력
// 단, 3과 5의 배수는 건너뛰기
for(let num = 1; num <= 20; num++){
  // 1) continue 사용 X
  // if(num % 3 !== 0 && num % 5 !== 0){
    //   console.log(num);
    // }
    
    // 2) continue 사용 O
    // continue 를 만나면 바로 증감식으로 올라감
    if(num % 3 === 0 || num % 5 === 0){
      continue;
    }
    console.log(num);
  }
}

/** continue 확인하기 */
/* 
  - 123456789 를 5줄 출력
  단, 1번 줄 출력 시 1 제외
  2번 줄 출력 시 2 제외
  3번 줄 출력 시 3 제외
  4번 줄 출력 시 4 제외
  5번 줄 출력 시 5 제외
*/
function check6(){
  
  for(let row = 1; row <= 5; row++){
    let result = "";
    for(let col = 1; col <= 9; col++){
      if(row === col){
        continue;
      }
      result += col + " ";
    }
    console.log(result);
  }

  // -------------------------------------
  console.log("-----------------------------------------");
  // "문자열".replace("검색어", "바꿀단어");
  // => 문자열 내에 검색어를 찾아서 "바꿀단어"로 변경
  for(let num = 1; num <= 5; num++){
    let str = "123456789";
    // num 과 일치하는 숫자를 str에서 찾아 ''으로 변경
    str = str.replace(num, ' ');
    
    console.log(str);
  }
}

function startGame(){
  // 맞춰야 하는 정답(1 ~ 200 사이 난수) 생성
  const answer = Math.floor((Math.random()*200 + 1));
  // 정답 시도 횟수를 세기 위한 변수
  let count = 0;

  let min = 1;
  let max = 200;

  console.log("정답 : " + answer);

  while(true){
    
    const input = prompt(`${min} ~ ${max} 사이에 숫자를 입력해 주세용(${7-count}번 남았습니다.)`);
    // 입력된 값 Number 타입으로 변경
    const inputNum = Number(input);
    
    // 취소를 제일 먼저 놔야 뒤에 조건식들에서 에러가 안남
    // null.length 는 불가 에러남
    
    if(input === null){
      alert(`${count+1}번째에서 포기 하셨습니다.(정답 : ${answer})`);
      break;
    }
    
    if(input === ""){
      alert("다시 입력해주세요.");
      continue; // 카운트 증가 구문 수행 X, 다음 반복으로 넘어감
    }
    
    if(!(min <= inputNum && inputNum <= max)){
      alert(`${min} ~ ${max} 사이 숫자만 입력해주세요.`);
      continue;
    }
    
    count++;

    if(inputNum === answer){
      alert(`정답~!! ${answer} / 시도 횟수 : ${count}`);
      break;
    }
    
    if(count === 7){
      alert(`7회 초과로 실패! (정답 : ${answer})`);
      break;
    }

    if(inputNum > answer){
      max = inputNum;
      alert(`DOWN! (현재) ${count}회`);
      continue;
    }

    if(inputNum < answer){
      min = inputNum;
      alert(`UP! (현재) ${count}회`);
      continue;
    }
  }

}

function check7(){



}

function check8(){

}