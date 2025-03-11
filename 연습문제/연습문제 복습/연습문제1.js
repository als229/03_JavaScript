const amount = document.getElementById('amount');
const output = document.getElementById('output');
const pw = '1234';

function test(){

  output.innerText = '1000000';
}

function deposit(){

  output.innerText = Number(output.innerText) + Number(amount.value);

}

function withdrawal(){

  const inputPw = prompt("비밀번호를 입력해라 닝겐");

  if(inputPw === null){
    alert("취소 했구나 닝겐 돌아가라");
    return;
  }

  if(inputPw !== pw){
    alert("비밀번호가 틀리다 돌아가라 닝겐");
    return;
  }

  const inputNum = amount.value;

  alert(`${ inputNum } 만큼 출력되었다 닝겐`);
  
  output.innerText = Number(output.innerText) - Number(inputNum);
}