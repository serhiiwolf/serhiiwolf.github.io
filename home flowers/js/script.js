let photoNumbernow = '1';
let photoNow = 0;
var urls = ['./img/81669.png', './img/81668.png', './img/81667.png', './img/81666.png'];
function choosePhoto(numb, q){
    if(numb == 5){
        photoNow = q;
    }
    if (numb == 1) {
        photoNow = photoNow - 1;
    }
    if(numb == 2){
        photoNow = photoNow + 1;
    }
    if (photoNow>=urls.length){
        photoNow = 0;
    }
    console.log(photoNow);
    return photoNow
}
function changePhoto(numb, pick) {
    choosePhoto(numb, pick);
    let chosenPhoto = urls[Number( photoNow)];
    document.getElementById('fone').style.background ="url("+ chosenPhoto+")";
    document.getElementById('photoNumber').innerHTML = `${photoNow+1}`+" - 4";
    document.getElementById('slide').getElementsByTagName("a")[photoNow].style.background ="#b3b3b3";
    for (let i = 0; i < document.getElementById('slide').getElementsByTagName("a").length;i++) {
        if(i !=  photoNow){
            document.getElementById('slide').getElementsByTagName("a")[i].style.background ="#fff";
        }
        
    }
    
}
