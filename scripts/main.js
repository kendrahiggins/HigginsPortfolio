<<<<<<< HEAD

 function showInput() {
    document.getElementById('display').innerHTML =
                document.getElementById("user_input").value + ' is mine too!';
}
=======
function setActive() {
  aObj = document.getElementById('nav').getElementsByTagName('a');
  for(i=0;i<aObj.length;i++) {
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className='active';
    }
  }
}

window.onload = setActive;
>>>>>>> 7a7a333a2000e42d5b5742268b4027d459f33e21
