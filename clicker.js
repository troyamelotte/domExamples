var button = document.getElementById('clicker');
var numText = document.getElementsByTagName('h3')[0];

var counter = 0;
function handleClick(){
  counter++;
  numText.innerHTML = counter;

  if(counter%2===0){
    numText.style.color = "blue";
  }else{
    numText.style.color = "red";
  }

  if(counter===10){
    button.disabled = true;
  }

}

button.onclick = handleClick;
