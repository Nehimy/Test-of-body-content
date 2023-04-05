let i, n;
i =1;
n = 10;

function squares() {
  for (var i = 0; i <= 10; i++) {
    document.querySelector('.container-white').innerHTML = "<div class=" + "square" + i + "></div>";
    /* document.querySelector('.container-white').innerHTML = i; */
  }
}

squares();
