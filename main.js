const btn = document.querySelector("button");
const items = document.querySelectorAll('li');
const liArray = [... items];

let size = 10;


const clicker = () => {
    for ( let i = 0; i<liArray.length; i++ ) {

        liArray[i].style.display = "block";
        liArray[i].style.fontSize = size + "px";

    }    
    size ++ ; 
}






btn.addEventListener("click" , clicker)