const numList = document.querySelectorAll(".number");
const resultSpan =  document.querySelector("#result");
let cnt = 0;

for(let numLists of numList){
  
  
  numLists.addEventListener("click", e => {
    
    if(cnt > 10){
      alert("10자 까지만 입력할 수 있습니다");
      return;
    }

    resultSpan.append(e.target.innerText);
    cnt++;
  });
}

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {

  resultSpan.innerHTML = "";
  cnt = 0;
});