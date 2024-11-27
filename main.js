let imgBox = document.querySelector(".img-box");
let img = document.getElementById("img");
let upload = document.getElementById("upload");
let saturate = document.getElementById("saturate");
let controst = document.getElementById("controst");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
let download = document.getElementById("download");
let span = document.querySelector("span");
let canvaas = document.getElementById("canvaas");
let ctx = canvaas.getContext("2d");

window.onload = ()=>{
    span.style.display = 'none';
    download.style.display = 'none';
    imgBox.style.display = 'none';
}

/*upload phote ?!*/
upload.onchange = ()=>{
    resetValue();
    span.style.display = 'block';
    download.style.display = 'block';
    imgBox.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = ()=>{
        img.src = file.result;
    }
    img.onload = ()=>{
        canvaas.width = img.width;
        canvaas.height = img.height;
        ctx.drawImage(img,0,0,canvaas.width,canvaas.height);
        img.style.display = 'none';
    }
}

/*phote editing ?!*/
let filtrs = document.querySelectorAll("ul li input");
filtrs.forEach(filter=>{
    filter.addEventListener('input',function(){
        ctx.filter = `
        saturate(${saturate.value}%)        
        contrast(${controst.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        `   
        ctx.drawImage(img,0,0,canvaas.width,canvaas.height);
    })

})

/*reset phote*/
function resetValue(){
    img.style.filter = '';
    saturate.value = '100';
    controst.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}
/*Download phote ?!*/
download.onclick = ()=>{
    download.href = canvaas.toDataURL();
}

/*change phote ?!*/

