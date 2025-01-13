const createBtn = document.querySelector("#create-btn");
const addArea = document.querySelector(".add-area");

createBtn.addEventListener("click", () => {
  const inputNum = Number(document.querySelector("#input-num").value);
  
  for(let i = 0; i < inputNum; i++){
    const inputDiv = document.createElement("div");
    inputDiv.className = "input-div";

    const inputBox = document.createElement("input");
    inputBox.className = "input-box";
    inputBox.type = "number";

    inputDiv.append(inputBox);

    addArea.append(inputDiv);
  }
});

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", () => {

  const inputBoxs = document.querySelectorAll(".input-box");
  let sum = 0;
  
  for(let inputBox of inputBoxs){
    sum += Number(inputBox.value);
  }

  document.querySelector("#result-span").innerHTML = sum;

});