/*a = 1;
function func(numb){
    if (numb == 1) {
        a--
    }else{
        a++
    }
    if (a<1){
        a = 3
    }
    if (a>3){
        a = 1
    }
    console.log(a);
    if (a == 1) {
        var element = document.getElementById("fone");
        element.classList.add("bg-1");
        element.classList.remove("bg-3");
        element.classList.remove("bg-2");
   }
   if (a == 2){
       var element = document.getElementById("fone");
        element.classList.add("bg-2");
        element.classList.remove("bg-1");
        element.classList.remove("bg-3");
   }  
   if (a == 3){
    var element = document.getElementById("fone");
     element.classList.add("bg-3");
     element.classList.remove("bg-1");
     element.classList.remove("bg-2");
    }   

}
.*/
let photoNumbernow = '1';
let photoNow = 0;
var urls = ['./img/fff.png', './img/IMG_2646.JPG', './img/IMG_4750.JPG', './img/P1010027.JPG', './img/P3250004.JPG'];
function choosePhoto(numb){
    if (numb == 1) {
        photoNow = photoNow - 1
    }
    if(numb == 2){
        photoNow = photoNow + 1
    }
    if (photoNow<0){
        photoNow = urls.length-1
    }
    if (photoNow>=urls.length){
        photoNow = 0
    }
    return photoNow
}
function changePhoto(numb) {
    choosePhoto(numb)
    let chosenPhoto = urls[Number( photoNow)]
   photoNumbernow = photoNow
    document.getElementById('fone').src = chosenPhoto;
   document.getElementById('photoNumber').innerHTML = ")"+`${photoNumbernow+1}`;
  }