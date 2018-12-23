console.log("tbd")
//Text
console.log("Hello World!");

var populationArray = [200000,500000,100000,400000,90000];
var maxPopulation = Math.floor(Math.random()*10)*100000;
var isOverPopulated = true; 

for (var i=0;i<populationArray.length;i++){

switch(maxPopulation){

case maxPopulation>populationArray[i]:console.log("larger") ;break;
case maxPopulation<populationArray[i]:console.log("smaller") ;break;
case maxPopulation==populationArray[i]:console.log("equals");break;
default:break;

}
}


if(((populationArray[populationArray.length-3]<100000 && populationArray[populationArray.length-2]<100000 && populationArray[populationArray.length-1]<100000) && maxPopulation<100000) || !isOverPopulated ){

    console.log("Small cities!!!")
}
else
 console.log("Large cities!!!")