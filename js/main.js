

  function casuali() {
    n = parseInt(document.getElementById("quanti").value);
    if (n > 0 && n <= 100) {
      str = "";
      for (i = 0; i < n; i++) {
           num = Math.round(Math.random()*100 + 1);
           if (i > 0) {
              str += ", ";
           }
           str += num;
       }
     document.getElementById("casuali").innerHTML = "Numeri generati: " + str;
     } 
     else {
        document.getElementById("casuali").innerHTML = "Inserisci un numero maggiore di 0 e inferiore a 100";
     }
  }