const btn = document.querySelector("#btn");
const divList = document.querySelectorAll(".row");
// const fruits = document.querySelectorAll(".fruits:checked"); 이렇게 체크된거 가져올 수 도 있음.

btn.addEventListener("click", () => {
  document.querySelector("#result").innerHTML = "none";
  let result = "";
  let sumPrice = 0;

  for(let div of divList){
    const divElements = div.children;

    if(divElements[0].checked){
      // div 밑에 요소들 뽑기
      // divElements[0] : 체크박스
      // divElements[1] : 과일이름
      // divElements[2] : 과일가격
      // divElements[3] : 과일개수
  
      // 과일 개수
      const fCnt = Number(divElements[3].value);
  
      result += `${divElements[1].innerHTML} ${fCnt}개 `;
      sumPrice += Number(divElements[2].innerHTML)*fCnt;
    }
  }

  document.querySelector("#result").innerHTML = `${result}총합 ${sumPrice}원`

});