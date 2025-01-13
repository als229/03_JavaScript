// 1. 자판 클릭하면 위에 숫자 나오게 하기 ok

// 2. 추가 버튼 누르면 오른쪽에 추가되면서 위에 리셋 ok

// 3. 초기화 버튼 누르면 위에 글자 초기화 ok

// 4. 즐겨찾기 누르면 별 노랗게 변하기

// 5. 엑스 버튼 누르면 삭제되기 ok




// 자판 번호들 뽑기
const numberList = document.querySelectorAll(".japan-area > div");
// 위에 자판 나오는 요소
const addNumberArea = document.querySelector(".add-number");
// 초기화 버튼
const resetBtn = document.querySelector("#reset-btn");
// 추가 버튼
const addBtn = document.querySelector("#add-btn");
// 전화번호 목록 추가되는 컨테이너 div
const innerList = document.querySelector(".inner-list");
// add-list div
const addList = document.querySelector(".add-list");
// star 버튼 뽑기
const starBtn = document.querySelector("#star-btn");
// x 버튼 뽑기
const xBtns = document.querySelectorAll("#x-btn");


// 위에 글자 추가하는 기능
for(let num of numberList){
  
  num.addEventListener("click", e => {
    
    document.querySelector(".add-number").innerHTML += e.target.innerHTML;
    
  });

}

// 초기화 버튼
resetBtn.addEventListener("click", () => {

  document.querySelector(".add-number").innerHTML = "";

});

// 추가 버튼
addBtn.addEventListener("click", () => {

  // 번호들어갈 div 생성
  const numberDiv = document.createElement("div");
  numberDiv.innerHTML = document.querySelector(".add-number").innerHTML;
  numberDiv.id ="number-div";

  // 별 들어갈 div 생성
  const starDiv = document.createElement("div");
  starDiv.id = "star-btn";
  starDiv.innerText = "☆";
  starDiv.addEventListener("click", e => {
    
    if(e.target.innerText === "☆"){
      e.target.innerText = "★";
      e.target.style.color = "yellowgreen"
      e.target.previousElementSibling.style.color = "red";
    }else{
      e.target.innerText = "☆";
      e.target.style.color = "black";
      e.target.previousElementSibling.style.color = "black";
    }

  });

  // x 들어갈 div 생성
  const xDiv = document.createElement("div");
  xDiv.id = "x-btn";
  xDiv.innerHTML = "&times;";

  // x 버튼 생성 하면서 이벤트 주기
  xDiv.addEventListener("click", e => {
  
    e.target.parentElement.remove();
  
  });
  
  // 만든 div 담을 inner-list div 생성
  const innerDiv = document.createElement("div");
  innerDiv.className = "inner-list";

  // 새로 만든 이너에 담아주기
  innerDiv.append(numberDiv, starDiv, xDiv);

  // add-list 에 추가
  addList.append(innerDiv);
  
  // 추가하면 위에 글자 삭제
  document.querySelector(".add-number").innerHTML = "";
});
