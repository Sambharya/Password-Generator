let rangeSlider = document.getElementById("rangeSlider");
let rangeValue = document.getElementById("rangeValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let passButton = document.getElementById("passButton");
let copyIcon = document.getElementById("copyIcon");
rangeValue.textContent = rangeSlider.value;
rangeSlider.addEventListener('input',()=>{
    rangeValue.textContent = rangeSlider.value;
});
passButton.addEventListener('click',()=>{
    passBox.value=generatePassword();
});
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "`!@#$%^&*()_-~,.<>:;''+/?{}[]|=";
function generatePassword(){
    let password = "";
    let allChar = "";
    allChar += lowercase.checked ? lowerChar:"";
    allChar += uppercase.checked ? upperChar:"";
    allChar += numbers.checked ? allNumbers:"";
    allChar += symbols.checked ? allSymbols:"";
    let i=1;
    while(i <= rangeSlider.value){
        password += allChar.charAt(Math.floor(Math.random() * allChar.length));
        i++;
    }
    return password;
}
copyIcon.addEventListener('click',()=>{
    if( passBox.value != "" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value); //This syntax copy the password
        copyIcon.innerText = "check";
        copyIcon.title = "Copy to Clipboard";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        },3000);
    }
});