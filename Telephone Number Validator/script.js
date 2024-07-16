const input=document.getElementById('user-input');
const check=document.getElementById('check-btn');
const clear=document.getElementById('clear-btn');
const result=document.getElementById('results-div');

const isValid=(inputV)=>{
  if(inputV===""){
    alert("Please provide a phone number");
    return;
  }

  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  const pTag=document.createElement('p');
  pTag.className='results-text';
  inputV.match(phoneRegex)?(pTag.style.color='green'):(pTag.style.color='red');

  
if(inputV.match(phoneRegex)){
  pTag.textContent=`Valid US number: ${input.value}`
}else{
  pTag.textContent=`Invalid US number: ${input.value}`
}
result.appendChild(pTag);
}
check.addEventListener('click',()=>{
  isValid(input.value);
  input.value = '';
})
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(input.value);
    input.value = '';
  }
});
clear.addEventListener('click', () => {
  input.value = '';
  result.textContent='';
});
