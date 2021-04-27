



function prova(quantita,a,b){
  array = [];
  risposta= [];

  for(var i = 0; i < quantita ;i++){
    array.push("")
  }

  if(a < b){
    for(var i = a; i < b; i++){
      risposta.push(++a)
    }

  }if(a > b){
    return alert("a dev'essere più piccolo di b")
  }if(b > array.lenght){
    return alert("b dev'essere più piccolo  o uguale a quantita")
  }

  return risposta;
}


console.log(prova(9,1,7))




