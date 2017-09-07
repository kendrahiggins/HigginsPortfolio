 function showInput() {
    document.getElementById('display').innerHTML =
                document.getElementById("user_input").value + ' is mine too!';
}


var nav = document.getElementById('nav')
nav.addEventListener("mouseover", function ( event ){
 event.target.style.color = "white";
