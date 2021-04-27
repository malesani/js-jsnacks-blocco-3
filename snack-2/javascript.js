var zucchine = [

  {
    nombre : "zucchina_1",
    misura : 18,
  },

  {
    nombre : "zucchina_2",
    misura : 10,
  },

  {
    nombre : "zucchina_3",
    misura : 8,
  },

  {
    nombre : "zucchina_4",
    misura : 5,
  },

  {
    nombre : "zucchina_5",
    misura : 2,
  },

  {
    nombre : "zucchina_6",
    misura : 3,
  },

  {
    nombre : "zucchina_7",
    misura : 5,
  },

  {
    nombre : "zucchina_8",
    misura : 20,
  },

  {
    nombre : "zucchina_9",
    misura : 25,
  },

  {
    nombre : "zucchina_10",
    misura : 17,
  }
]

var più_di_15 = [];
var meno_di_15 = [];

for (var zucchina of zucchine){
  if(zucchina.misura < 15){
    meno_di_15.push(zucchina)
  }else{
    più_di_15.push(zucchina)
  }
}

console.log(più_di_15)
console.log(meno_di_15);