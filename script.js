let insert;
insert= document.querySelector('.container-white').innerHTML;

let divs="";

function squares() {
  for (var i = 1; i <= 20; i++) {

    divs= divs + "<div class="+ "square-" + i + "></div>";
  }
  document.querySelector('.container-white').innerHTML= divs;
}

squares();
