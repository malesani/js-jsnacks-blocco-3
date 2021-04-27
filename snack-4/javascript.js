
//array
var squadra_basket = [

  {
    
  },

  {
    
  },

  {
    
  },

  {
    
  },

  {
    
  }
]

//ciclo per inserire dentro l'array
for(puntos of squadra_basket){
  
  //cicli valori
  var media_punti_parita = pointsPartita(0,50) +"pts per partita";
  var media_punti_3 = tiri_3(0, 100) + "%";
  var code_players = casuale();
  
  //inserire gli indici e valori
  puntos.code_player = code_players;
  puntos.media_punti = media_punti_parita;
  puntos.tiro_3  = media_punti_3;
}


console.log(squadra_basket)


//funzione  
function pointsPartita(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function tiri_3(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function tiri_3(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function casuale(){
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num_cod ="0123456789"
  var string_length = 3;
  var randomstring = '';
  var randomnum = "";
  var totale = "";
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    var rlett = Math.floor(Math.random() * num_cod.length); 
    randomstring += chars.substring(rnum,rnum+1);
    randomnum += num_cod.substring(rlett,rlett+1);
    totale = randomstring + randomnum
  } 
  return totale;  
}
















  
 




