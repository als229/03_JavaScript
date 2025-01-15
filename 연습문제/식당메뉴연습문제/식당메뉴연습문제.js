// 1. 식당 이름 클릭하면 input 으로 변신 focus 없어지면 글자로 변신

// 2 수정 버튼 누르면 list로 바꾸기

// 3. 종료하면 리스트들이 div애들로 바뀌기

// 4. 추가 누르면 리스트 늘어나기

// 5. 삭제하면 삭제되기



// 식당이름 들어갈 요소 뽑기
const storeName = document.querySelector(".store-name");
// 식당이름 입력하는 input 요소
const nameInput = document.querySelector("#input-name");

storeName.addEventListener("click", () => {

  // 입력칸일때
  if(storeName.style.display === "none"){
    nameInput.style.display = "none";
    storeName.style.display = "block";
    
  }else{ // 제목이 나와있을때
    nameInput.value = storeName.innerHTML.trim();
    nameInput.style.display = "block";
    storeName.style.display = "none";
    nameInput.focus();
  }
});

nameInput.addEventListener("blur", () =>{
  storeName.innerHTML = nameInput.value;
  nameInput.style.display = "none";
  storeName.style.display = "block";

});


////////////////////////////////////////////////////////////////////////////////

const updateBtn = document.querySelector("#update-btn");

//메뉴 div 리스트
const divList = document.querySelectorAll(".menu-list");
// 메뉴 ul 리스트
const ulList = document.querySelectorAll(".ul-list");

updateBtn.addEventListener("click", () => {




});



/**
 * @param inputel = 만들 element
 */
function elMaker (inputel){

  const el = document.createElement(inputel);

  return el;
}