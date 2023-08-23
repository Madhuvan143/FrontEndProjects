let photo = document.getElementById("img");
let inputFile = document.getElementById("upload");
inputFile.onchange = function(){
    photo.src = URL.createObjectURL(inputFile.files[0]);    
}