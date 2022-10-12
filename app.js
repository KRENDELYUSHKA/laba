var input=document.getElementById('input');
var button=document.getElementById('button');
var p=document.getElementById('p');
var regexp = /\b((([1-9])|([1-9][0-9])|(1\d{2})|(2[0-5][0-5]))\.(\d|([1-9][0-9])|(1\d{2})|(2[0-5][0-5]))\.(\d|([1-9][0-9])|(1\d{2})|(2[0-5][0-5]))\.((2[0-5][0-5])|(1\d{2})|([1-9][0-9])|\d))\b/;
button.addEventListener('click', function () {
    if(!regexp.test(input.value)){
        p.innerHTML="Не корректный IP-адрес";
    }
    else{
        p.innerHTML=input.value;
    }
  });