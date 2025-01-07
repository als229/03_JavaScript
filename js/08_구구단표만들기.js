/** 구구단표 만들기  */
function createTable(){
  const start = document.getElementById("start");
  const end = document.getElementById("end");
  const startDan = Number(start.value);
  const endDan = Number(end.value);

  /* 테이블 머리(단 입력 영역) */
  const thead = document.getElementById("thead");
  /* 테이블 몸통(구구단 표 출력 영역) */
  const tbody = document.getElementById("tbody");

  //기존에 남아 있던 표를 삭제하는 작업
  // 시작/종료 태그 사이 내용을 빈캄으로 바꿈 => 삭제 효과
  thead.innerHTML = "";
  tbody.innerHTML = "";

  // 시작 또는 종료 단이 입력되지 않은 경우
  // => alert("시작/종료 단을 입력 해주세요.");
  // (start.value.length === 0)   (start.value === "") 둘 다 가능
  if(start.value.length === 0 || end.value.length === 0){
    alert("시작/종료 단을 입력 해주세요.");
    return;
  }
  
  // 시작 또는 종료 단에 0이하가 입력된 경우
  // => alert("1 이상의 수만 입력 해주세요.");
  if(startDan <= 0 || endDan <= 0){
    alert("1 이상의 수만 입력 해주세요.");
    return;
  }
  
  // 시작 단이 종료 단 보다 큰 경우
  // => alert("시작 단이 종료 단보다 클 수 없습니다.");
  if(startDan > endDan){
    alert("시작 단이 종료 단보다 클 수 없습니다.");
    return;
  }
  
  // let theadtResult = "";
  // let tbodyResult = "";

  // 방법 1 for 문 하나
  // for(let row = 1; row <= 9; row++){
  //   if(row === 1){
  //     theadtResult += `<tr> `;
  //   }
  //   tbodyResult += `<tr> `;
    
  //   for(let col = startDan; col <= endDan; col++){
  //     if(row === 1){
  //       theadtResult += `<th>${col}단</th>`;
  //     }
  //     tbodyResult += `<td> ${col} X ${row} = ${col*row} </td>`;
  //   }
  //   if(row === 1){
  //     theadtResult += `</tr> `;
  //   }
  //   tbodyResult += `</tr>`;
  // }

  // 방법 2 for 문 두개
  // for(let row = 1; row <= 9; row++){
  //   tbodyResult += `<tr> `;
  
  //   for(let col = startDan; col <= endDan; col++){
  //     tbodyResult += `<td> ${col} X ${row} = ${col*row} </td>`;
  //   }
  //   tbodyResult += `</tr> `;
  // }
    
  // theadtResult += `<tr>`
  
  // for(let num = startDan; num <= endDan; num++){
  //   theadtResult += `<th>${num}단</th>`;
  // }
  // theadtResult += `</tr>`

  // thead.innerHTML = theadtResult;
  // tbody.innerHTML = tbodyResult;

  // 강사님 코드
  // thead에 들어갈 html 코드 생성
  let output1 = '<tr>';
  for(let num = startDan; num <= endDan; num++){
    output1 += `<th>${num}단</th>`
  }
  output1 += '</tr>';

  // 생성한 html 코드를 HTML 문서에 추가 => 출력
  thead.innerHTML = output1;

  // 구구단 표 몸통 부분
  // 곱해지는 수 (1~9) + tr태그의 개수
  for(let num = 1; num <= 9; num++){
    let tr = "<tr>";
    
    // <td>단 x num = 결과</td> 생성 for문
    for(let dan = startDan; dan <= endDan; dan++){
      tr += `<td>${dan}단 X ${num} = ${dan*num}</td>`
    }

    tr += "</tr>"

    tbody.innerHTML += tr; 
  }
}