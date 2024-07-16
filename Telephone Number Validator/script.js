const input=document.getElementById('user-input');
const check=document.getElementById('check-btn');
const clear=document.getElementById('clear-btn');
const result=document.getElementById('results-div');

const isValid=()=>{
  if(input.value===""){
    alert("Please provide a phone number");
    return;
  }
  result.classList.remove('hidden');
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
if(input.value.match(phoneRegex)){
  result.innerHTML=`
  <p class='results-text'>Valid US number: ${input.value}</p>
  `
  input.value='';
}else{
  result.innerHTML=`
  <p class='results-text'>Invalid US number: ${input.value}</p>
  `
  input.value='';
}
}
check.addEventListener('click',isValid)
clear.addEventListener('click', () => {
  input.value = '';
  result.classList.add('hidden');
  result.innerHTML = '';
});
