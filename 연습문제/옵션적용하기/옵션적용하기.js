const submitBtn = document.querySelector("#submit-btn");


/////////////////////////////////////////////////////////////////

submitBtn.addEventListener("click", function(){
  
  const divBox = document.querySelector("#input-box");
  // 너비
  const widthPx = document.querySelector("#width-px").value;
  
  // 높이
  const heightPx = document.querySelector("#height-px").value;
  
  // 글자 크기
  const fontSize = document.querySelector("#font-size").value;
  
  
  // 글자색
  const fontColor = document.querySelector("#font-color").value;
  
  // 배경색
  const bgColor = document.querySelector("#bg-color").value;
  
  // 가로정렬
  // const  = document.querySelector("#").value;
  
  // 세로정렬
  // const  = document.querySelector("#").value;
  
  // 출력 문자열
  const inputText = document.querySelector("#input-text").value;
  
  // 너비 입력
  divBox.style.width = `${Number(widthPx)}px`;
  
  // 높이 입력
  divBox.style.height = `${Number(heightPx)}px`;
  
  // 글자 크기
  divBox.style.fontSize = `${Number(fontSize)}px`;
  
  // 굵기
  // 처음 HTML 로딩 시 체크된 요소가 없어서 이벤트 핸들러 밖에다 하면 NULL이 고정
  const fontBold = document.querySelector("[name = bold-radio]:checked").value;
  
  // 굵기
  divBox.style.fontWeight = `${fontBold}`;
  
  // 글자색
  divBox.style.color = `${fontColor}`;
  
  // 글자색
  divBox.style.backgroundColor = `${bgColor}`;
  
  // // 가로정렬
  // divBox.style. = ``;
  
  // // 세로 정렬
  // divBox.style. = ``;
  
  // // 출력 문자열
  document.querySelector("#box-span").innerText = `${inputText}`;
});