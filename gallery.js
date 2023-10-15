let minImage = 1;
let maxImage = 3;

let curImage = minImage;

function nextImage(){
    let img = document.getElementById("gallery-image");
    curImage += 1;

    if(curImage <= maxImage){
        img.src = `Assets/Gallery-images/gallery-${curImage}.webp`;
    }
    else{
        curImage = maxImage;
    }
}

function prevImage(){
    let img = document.getElementById("gallery-image");
    curImage -= 1;

    if(curImage >= minImage){
        img.src = `Assets/Gallery-images/gallery-${curImage}.webp`;
    }
    else{
        curImage = minImage;
    }
}