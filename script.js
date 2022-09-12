var inp1=document.getElementById('input1');
var inp2=document.getElementById('input2');
var but=document.getElementById('button');
var p=document.getElementById('result');
button.addEventListener('click',function(e){
    e.preventDefault();
    inp1=input1.value;
    inp2=input2.value;
    for(var i=0;i<=inp2;i++){
        var d=(Math.pow(-1,inp2))*Math.pow(inp1-1,(inp2+1))/(inp2+1);
    }
    var result=(inp1-1)+d;
    p.innerHTML=result;
});