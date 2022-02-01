var number = 0;

function eleMaker(name,damage){
    var ele = document.createElement("div");
    ele.innerHTML=name;
    ele.addEventListener("click", function (){
        increase(damage);
    })
    document.body.querySelector(".main").appendChild(ele);
}

function increase (damage){
    number=number+damage;
    document.body.querySelector(".number").innerHTML=number;
}

document.body.querySelector(".clicker" ).addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("I am Iron Man", 10);
});

document.body.querySelector(".clicker2" ).addEventListener("click", function ()
{
    document.body.querySelector(".main").innerHTML="";
    eleMaker("I can do this all Day", 20);
});

document.body.querySelector(".clicker3" ).addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Sun's getting real low", 10);
});

document.body.querySelector(".clicker4" ).addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("You took everything from me!", 30);
});

document.body.querySelector(".clicker5" ).addEventListener("click", function (){
    document.body.querySelector(".main").innerHTML="";
    eleMaker("Reset", 0);
});