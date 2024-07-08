const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');


const checkPalindrome=input=>{
  if (input===''){
    alert('Please input a value');
    return;
  }
  const lowerCase=input.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
  let resultMsg= `<p><strong>${input} </strong>${lowerCase===lowerCase.split('').reverse().join('')?'is':'is not'} a palindrome.`;
  resultDiv.innerHTML=resultMsg;
  resultDiv.classList.remove('hidden');
}


checkPalindromeBtn.addEventListener('click',()=>checkPalindrome(userInput.value));
