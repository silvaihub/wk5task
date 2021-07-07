function inFun()
{    
    var inc = document.getElementById("conum").value;
    inc= inc * 39.3701;
    document.getElementById("conum").value = inc;
    
};

btnInch.addEventListener("click",inFun);
function feetFun()
{
    var feet = document.getElementById("conum").value;
    feet = feet * 3.2808;
    document.getElementById("conum").value = feet;
};
btnFeet.addEventListener("click",feetFun);
function yardFun()
{
    var yard = document.getElementById("conum").value;
    yard = yard * 1.0936;
    document.getElementById("conum").value = yard;
};
    btnYard.addEventListener("click",yardFun);