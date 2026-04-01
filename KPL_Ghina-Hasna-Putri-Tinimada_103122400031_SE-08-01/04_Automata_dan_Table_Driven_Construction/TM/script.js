const textInput = document.getElementById("textInput");
const count = document.getElementById("count");

textInput.addEventListener("input", updateCount);

function updateCount(){
    let text = textInput.value;
    let total = text.length;
    let upper = (text.match(/[A-Z]/g) || []).length;
    let lower = (text.match(/[a-z]/g) || []).length;

    count.textContent = `Huruf: ${total}, huruf besar: ${upper} huruf kecil: ${lower}`;
}

function toUpper(){
    textInput.value = textInput.value.toUpperCase();
    updateCount();
}

function toLower(){
    textInput.value = textInput.value.toLowerCase();
    updateCount();
}

function setMode(mode){
    document.body.classList.remove("light-mode","dark-mode","sepia-mode");

    if(mode === "light"){
        document.body.classList.add("light-mode");
    }
    if(mode === "dark"){
        document.body.classList.add("dark-mode");
    }
    if(mode === "sepia"){
        document.body.classList.add("sepia-mode");
    }
}