/* [요구사항]

    입력 폼 구현
    -화면 왼쪽에 구현
    - 아이디, 이름, 전화번호를 입력받을 수 있는 입력 필드 구현
    - 모든 필드는 필수 입력 항목
    
    회원 등록 기능
    - 등록 버튼 클릭 시 입력된 정보의 유효성 검사
    - 아이디 중복 검사 구현
    - 전화번호 중복 검사 구현
    - 중복된 정보가 있을 경우 적절한 경고(alert) 메시지 출력 
    - 등록 성공 시 입력 필드 초기화

    회원 목록 표시
    - 화면 오른쪽에 구현
    - 등록된 회원 정보를 테이블 형태로 표시
    - 각 행에 체크박스 추가
    - 테이블 헤더에 전체 선택/해제 체크박스 구현

    회원 삭제 기능
    - 선택된 회원을 삭제할 수 있는 삭제 버튼 구현
    - 체크된 항목이 없을 경우 경고 메시지 출력
   */

/* 등록 */

const insertBtn = document.querySelector("#insert-btn");
const delBtn = document.querySelector("#del-btn");
const allSelectCheck = document.querySelector("#th-check");

const memberList = [];

function Member(id, name, phone){
  this.id    = id;
  this.name  = name;
  this.phone = phone;
}

insertBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".input");
  let values = [];
  for(let input of inputs){
    if(input.value  === ""){
      alert("모든 필드를 입력해주세요.");
      input.focus();
      return;
    }
    values.push(input.value);
  }
  
  // 중복검사
  for(let member of memberList){
    if(values[0] === member.id){
      alert("이미 존재하는 아이디입니다.");
      return;
    }
    if(values[2] === member.phone){
      alert("이미 존재하는 번호입니다.");
      return;
    }
  }
  const member = new Member(values[0], values[1], values[2]);
  
  memberList.push(member);

  for(let input of inputs){
    input.value = "";
  }
  
  tableMaker();
});

function tableMaker(){
  const index = memberList.length-1;

  const tr = elMaker("tr", "","tr-class","");
  const td1 = elMaker("td", "", "td-check","");
  const checkbox = elMaker("input","checkbox","td-check","");
  checkbox.addEventListener("click",() => {
    checkboxCheck();
  });
  const td2 = elMaker("td", "", "td-content", memberList[index].id);
  const td3 = elMaker("td", "", "td-content", memberList[index].name);
  const td4 = elMaker("td", "", "td-content", memberList[index].phone);
  
  const table = document.querySelector(".table>tbody");
  td1.append(checkbox);
  tr.append(td1,td2,td3,td4);

  table.append(tr);
}

function elMaker(inEl, inType, inClass, inValue){
  const returnEl = document.createElement(inEl);
  returnEl.className = inClass;
  returnEl.type = inType;
  returnEl.innerText = inValue;

  return returnEl;
}

delBtn.addEventListener("click", () => {
  const checkedList = document.querySelectorAll(".td-check:checked");

  for(let checked of checkedList){
    checked.parentElement.parentElement.remove();
  }

});

allSelectCheck.addEventListener("click", () => {

  const checkedList = document.querySelectorAll(".td-check");
  
  if(allSelectCheck.checked){
    for(let checkedBox of checkedList){
      checkedBox.checked = "true";
    };
  }else{
    for(let checkedBox of checkedList){
      checkedBox.checked = "";
    };
  };

  checkboxCheck();
});

function checkboxCheck(){

  const checkedList = document.querySelectorAll(".td-check");
  let cnt = 0;

  for(let box of checkedList){
    if(box.checked){
      cnt++;
    }
  }

  if(cnt === checkedList.length){
    allSelectCheck.checked = "true";
  }
  
  if(cnt !== checkedList.length){
    allSelectCheck.checked = "";
  }

}