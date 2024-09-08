const textValue = document.getElementById("text-input").value;
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")
const isPalindrome = textValue => {
    const lowerCaseText = textValue.toLowerCase().replace(/[^a-z0-9]/g, '');
   return lowerCaseText === lowerCaseText.split("").reverse().join("")
}
checkBtn.addEventListener("click", () => {
    const textValue = document.getElementById("text-input").value
    if(textValue === ""){
      alert("Please input a value")
    }else{
    const isPalindromic = isPalindrome(textValue);
    result.innerHTML = isPalindromic ? `${textValue} is a palindrome` : `${textValue} is not a palindrome`;
    }
  });
  
