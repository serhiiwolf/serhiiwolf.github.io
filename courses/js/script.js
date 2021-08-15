//1
let cost = 0;
let count = 0;
function buy(a,b){
let amount = document.getElementById(b).value;
if(amount == ""){amount = 1}
cost = cost + Number(a) * amount;
var price= document.getElementById("cost");
price.innerHTML=cost;
count = count + 1 * amount;
var price= document.getElementById("count");
price.innerHTML=count;
}
//2
function filter1(a){
    var filt = a.value;
    var x = document.getElementsByClassName("product-box__item");
    if(filt == 0){
        for(var i =0;i<x.length;i++ ){
            x[i].classList.remove("off");
        }
    } else if(filt == 1){
        for(var i =0;i<x.length;i++ ){
            if( x[i].classList.contains("breakfast"))
            {
                x[i].classList.remove("off");
            }
            else{
                x[i].classList.add("off");
            }
            
        }  
    } else if(filt == 2){
        for(var i =0;i<x.length;i++ ){
            if( x[i].classList.contains("soup"))
            {
                x[i].classList.remove("off");
            }
            else{
                x[i].classList.add("off");
            }
            
        }  
    } else if(filt == 3){
        for(var i =0;i<x.length;i++ ){
            if( x[i].classList.contains("garnish"))
            {
                x[i].classList.remove("off");
            }
            else{
                x[i].classList.add("off");
            }
            
        }  
    } 

}
function filter2(a){
    var filt = a.value;    
    var x = document.getElementsByClassName("product-box__item");
    if(filt == 0){
        for(var i =0;i<x.length;i++ ){
            x[i].classList.remove("off");
        }
    } else {
        for(var i =0;i<x.length;i++ ){
            var elementP=x[i].getElementsByTagName("p");
            var number = elementP[0].innerText.split(" ");
            if(Number(number[0])<=filt)
            {
               x[i].classList.remove("off"); 
            }
            else{
                x[i].classList.add("off");
            }

            
        }
    }

}
//3
function onmodal(){
    var md = document.getElementById("ModalBox");
    md.classList.add("modal");
}
function offmodal(){
    var md = document.getElementById("ModalBox");
    md.classList.remove("modal");
}

function check(){
    var name = document.getElementById("name");
    var mail = document.getElementById("mail");
    if (mail.validity.typeMismatch || name.validity.valueMissing || mail.value=="" || name.value=="") {
            alert("помилка в написанні");
        } else{
            alert("дякую за покупку");
            offmodal();
            var price= document.getElementById("cost");
            price.innerHTML='XXX';        
            var price= document.getElementById("count");
            price.innerHTML='XXX';
        }

  
}