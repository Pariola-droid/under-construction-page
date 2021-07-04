function copyText() {
  
  if (!htmlElement) {
    return;
  }

  let mailAddress = htmlElement.innerText;

  let inputElement = document.createElement('input');
  inputElement.setAttribute('value', mailAddress);
  document.body.appendChild(inputElement);

  inputElement.select();

  document.execCommand('copy');

  inputElement.parentNode.removeChild(inputElement);

}

document.querySelector('#copy-btn').onClick = 
function () {
  copyText(document.querySelector('#mail'));
}







// copyMail.select();
//   copyMail.setSelectionRange(0, 9999);
//   document.execCommand("copy") 