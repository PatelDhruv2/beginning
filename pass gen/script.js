const password = document.getElementById('password');
const length=8;
const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase='abcdefghijklmnopqrstuvwxyz';
const numbers='0123456789';
const symbols='!@#$%^&*()_+';
function createPassword(){
    let passwordValue='';
    for(let i=0;i<length;i++){
        const type=Math.floor(Math.random()*4)+1;
        if(type===1){
            passwordValue+=upperCase.charAt(Math.floor(Math.random()*upperCase.length));
        }
        if(type===2){
            passwordValue+=lowerCase.charAt(Math.floor(Math.random()*lowerCase.length));
        }
        if(type===3){
            passwordValue+=numbers.charAt(Math.floor(Math.random()*numbers.length));
        }
        if(type===4){
            passwordValue+=symbols.charAt(Math.floor(Math.random()*symbols.length));
        }
    }
    password.value=passwordValue;
}
createPassword();
function copyPassword(){
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0,9999);
    document.execCommand("copy");
    alert("Password Copied: " + copyText.value);
}
function create(){
    alert('Password copied to clipboard');
}
