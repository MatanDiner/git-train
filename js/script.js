console.log("tbd")
//Text
console.log("Hello World!");

var populationArray = [2,5,3,4,7];
var maxPopulation = Math.floor(Math.random()*10)*100000;
var isOverPopulated = true; 

for (var i=0;i<populationArray.length;i++){

switch(maxPopulation){

case maxPopulation>populationArray[i]:console.log("larger");
case maxPopulation<populationArray[i]:console.log("smaller");
case maxPopulation==populationArray[i]:console.log("equals");
default:

}
}


if((populationArray[1]+populationArray[2]+populationArray[3]<100000 && maxPopulation<100000) || !isOverPopulated ){

    console.log("Small cities!!!")
}
else
 console.log("Large cities!!!")