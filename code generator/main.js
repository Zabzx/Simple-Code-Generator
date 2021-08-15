const generate = document.querySelector('.generate');
const codeShown = document.querySelector('.code-presented');
const submit = document.querySelector('.submit');
const codeValues = [1,2,3,4,5,6,7,8,9,0,'Q','W','E','R','T','Y'];
const copy = document.querySelector('.copy');
const copyMessage = document.querySelector('.code-copied');
const input = document.querySelector('.enter-code');
const message = document.querySelector('.message');

validCodes = [];
console.log(validCodes)

generate.addEventListener('click', generateCode);
submit.addEventListener('click', validateCode);
copy.addEventListener('click', copyCode)

function generateCode(){
    let code = '';
    for (i = 0; i < codeValues.length; i++){
        code += codeValues[randomNumber()];
    }

    validCodes.push(code);
    console.log(validCodes)
    
    codeShown.value = code;

    setTimeout(expireCode, 10000)

    function expireCode(){
        validCodes.pop(code);
        console.log(validCodes)
    }
}
function validateCode(){
    let codeEntered = document.querySelector('.enter-code').value;
    
    if (validCodes.includes(codeEntered)){
        message.textContent = 'Code is valid!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Please enter a valid code';
        message.style.color = 'red';
    }
}

function copyCode(){
    codeShown.select();

    document.execCommand('Copy');

    copyMessage.textContent = 'Code copied!';
    setTimeout(copyCodeRemove, 2000);
}

function copyCodeRemove(){
    copyMessage.textContent = '';
}
function randomNumber(){
    return Math.floor(Math.random() * codeValues.length);
}