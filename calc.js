let d1=document.querySelector(".d1")
let d2=document.querySelector(".d2")
let op=document.querySelector(".o1")
let button=document.querySelector(".button")

button.addEventListener("click",myfunction)
function myfunction()
{
    var f1=Number(d1.value)
    var f2=Number(d2.value)
    var o=(op.value)
    let result=0;
if(o=='+')
{
 result=f1+f2
    document.getElementById("answer").innerText=result;
}
if(o=='-')
{
 result=f1-f2
    document.getElementById("answer").innerText=result;
}

if(o=='*')
{
 result=f1*f2
    document.getElementById("answer").innerText=result;
}
if(o=='/')
{
 result=f1/f2
    document.getElementById("answer").innerText=result;
}
if(o=='%')
{
 result=f1%f2
    document.getElementById("answer").innerText=result;
}




}