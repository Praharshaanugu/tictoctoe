function check()
{
let X_WIN=0;
let O_WIN=0;

if((v1.innerHTML=="X" && v2.innerHTML=="X" && v3.innerHTML=="X")|| (v1.innerHTML=="X" && v4.innerHTML=="X" && v7.innerHTML=="X") || (v1.innerHTML=="X" && v5.innerHTML=="X" && v9.innerHTML=="X")|| (v7.innerHTML=="X" && v8.innerHTML=="X" && v9.innerHTML=="X")|| (v3.innerHTML=="X" && v5.innerHTML=="X" && v7.innerHTML=="X")|| (v2.innerHTML=="X" && v5.innerHTML=="X" && v8.innerHTML=="X")|| (v3.innerHTML=="X" && v6.innerHTML=="X" && v9.innerHTML=="X")|| (v4.innerHTML=="X" && v5.innerHTML=="X" && v6.innerHTML=="X"))
{
    X_WIN=1;
}
if((v1.innerHTML=="O" && v2.innerHTML=="O" && v3.innerHTML=="O")|| (v1.innerHTML=="O" && v4.innerHTML=="O" && v7.innerHTML=="O") || (v1.innerHTML=="O" && v5.innerHTML=="O" && v9.innerHTML=="O")|| (v7.innerHTML=="O" && v8.innerHTML=="O" && v9.innerHTML=="O")|| (v3.innerHTML=="O" && v5.innerHTML=="O" && v7.innerHTML=="O")|| (v2.innerHTML=="O" && v5.innerHTML=="O" && v8.innerHTML=="O")|| (v3.innerHTML=="O" && v6.innerHTML=="O" && v9.innerHTML=="O")|| (v4.innerHTML=="O" && v5.innerHTML=="O" && v6.innerHTML=="O"))
{
    O_WIN=1;
}

if(X_WIN==1 && O_WIN==0)
{
    alert("Congratulations! X WINS");
}
else if(O_WIN==1 && X_WIN==0)
{
    alert("Congratulations! O WINS");
}
else if(X_WIN==0 && O_WIN==0 && v1.innerHTML!="" && v2.innerHTML!="" && v3.innerHTML!="" && v4.innerHTML!="" && v5.innerHTML!="" && v6.innerHTML!="" && v7.innerHTML!="" && v8.innerHTML!="" && v9.innerHTML!="")
{
    alert("Congratulations! IT'S A DRAW");
}
}


let v1=document.getElementById("b11");
let v2=document.getElementById("b12");
let v3=document.getElementById("b13");
let v4=document.getElementById("b21");
let v5=document.getElementById("b22");
let v6=document.getElementById("b23");
let v7=document.getElementById("b31");
let v8=document.getElementById("b32");
let v9=document.getElementById("b33");


let chance=false
v1.addEventListener("click",function(){
    if(v1.innerHTML=="")
    {
        if(chance==false)
        {
            v1.style.color="red";
            v1.innerHTML="X";
            chance=true;
        }
        else
        {
            v1.style.color="black";
            v1.innerHTML="O";
            chance=false;
        }
    }
    else if(v1.innerHTML=="X" || v1.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v1.innerHTML="";
    }
    check();

});

v2.addEventListener("click",function(){
     if(v2.innerHTML=="")
    {
        if(chance==false)
        {
            v2.style.color="red";
            v2.innerHTML="X";
            chance=true;
        }
        else
        {
            v2.style.color="black";
            v2.innerHTML="O";
            chance=false;
        }
    }
    else if(v2.innerHTML=="X" || v2.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v2.innerHTML="";

    }
    check();

});

v3.addEventListener("click",function(){
    if(v3.innerHTML=="")
    {
        if(chance==false)
        {
            v3.style.color="red";
            v3.innerHTML="X";
            chance=true;
        }
        else
        {
            v3.style.color="black";
            v3.innerHTML="O";
            chance=false;
        }
    }
    else if(v3.innerHTML=="X" || v3.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v3.innerHTML="";
    }
    check();
  
});

v4.addEventListener("click",function(){
   if(v4.innerHTML=="")
    {
        if(chance==false)
        {
            v4.style.color="red";
            v4.innerHTML="X";
            chance=true;
        }
        else
        {
            v4.style.color="black";
            v4.innerHTML="O";
            chance=false;
        }
    }
    else if(v4.innerHTML=="X" || v4.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v4.innerHTML="";
    }
    check();
});

v5.addEventListener("click",function(){
   if(v5.innerHTML=="")
    {
        if(chance==false)
        {
            v5.style.color="red";
            v5.innerHTML="X";
            chance=true;
        }
        else
        {
            v5.style.color="black";
            v5.innerHTML="O";
            chance=false;
        }
    }
    else if(v5.innerHTML=="X" || v5.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v5.innerHTML="";
    }
    check();

});


v6.addEventListener("click",function(){
    if(v6.innerHTML=="")
    {
        if(chance==false)
        {
            v6.style.color="red";
            v6.innerHTML="X";
            chance=true;
        }
        else
        {
            v6.style.color="black";
            v6.innerHTML="O";
            chance=false;
        }
    }
    else if(v6.innerHTML=="X" || v6.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v6.innerHTML="";
    }
    check();
});

v7.addEventListener("click",function(){
   if(v7.innerHTML=="")
    {
        if(chance==false)
        {
            v7.style.color="red";
            v7.innerHTML="X";
            chance=true;
        }
        else
        {
            v7.style.color="black";
            v7.innerHTML="O";
            chance=false;
        }
    }
    else if(v7.innerHTML=="X" || v7.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v7.innerHTML="";
    }
    check();
});



v8.addEventListener("click",function(){
    if(v8.innerHTML=="")
    {
        if(chance==false)
        {
            v8.style.color="red";
            v8.innerHTML="X";
            chance=true;
        }
        else
        {
            v8.style.color="black";
            v8.innerHTML="O";
            chance=false;
        }
    }
    else if(v8.innerHTML=="X" || v8.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v8.innerHTML="";
    }
    check();
});



v9.addEventListener("click",function(){
    if(v9.innerHTML=="")
    {
        if(chance==false)
        {
            v9.style.color="red";
            v9.innerHTML="X";
            chance=true;
        }
        else
        {
            v9.style.color="black";
            v9.innerHTML="O";
            chance=false;
        }
    }
    else if(v9.innerHTML=="X" || v9.innerHTML=="O")
    {
        if(chance==false)
        {
            chance=true;
        }
        else
        {
            chance=false
        }
        v9.innerHTML="";
    }
    check();
});

let reset=document.getElementById("reset");
reset.addEventListener("click",function(){
    window.location.reload();
})
