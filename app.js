var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";
alert("Welcome to " + city3);
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[3]);
var mixedArray = [1, "Bob", "Now is", true];


var pets = [];
 pets[0] = "dog";
 pets[1] = "cat";
 pets[2] = "bird";
 pets[3] = "lizard";
 pets[6] = "snake";
 pets[3] = "lizard";
  pets[4] = "fish";
  pets[5] = "gerbil";
  pets[6] = "snake";
  pets.pop();
  pets.push("fish", "ferret");


  pets.shift();
  pets.unshift("fish", "ferret");
  pets.splice(2, 2, "pig", "duck", "emu");
  pets.splice(2, 0, "pig", "duck", "emu");
  pets.splice(2, 2);
  var noPets = pets.slice(2, 4);


  var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
  if (cityToCheck === cleanestCities[0]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[1]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[2]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[3]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[4]) {
     alert("It's one of the cleanest cities");
     }
    
    
    
     else {
     alert("It's not on the list");
     }

     for (var i = 0; i <= 4; i++) {
         if (cityToCheck === cleanestCities[i]) {
         alert("It's one of the cleanest cities");
         }
         }


         var matchFound = "no";
         var matchFound = "no";
 for (var i = 0; i <= 4; i++);
 if (cityToCheck === cleanestCities[i]) {
 matchFound = "yes";
 alert("It's one of the cleanest cities");
 }


 if (matchFound === "no") {
 alert("It's not on the list");
 }

 var matchFound = false;
  for (var i = 0; i <= 4; i++);
  if (cityToCheck === cleanestCities[i]) {
  matchFound = true;
  alert("It's one of the cleanest cities");
  }
  
  if (matchFound === false) {
  alert("It's not on the list");
  }

  var matchFound = false;
   for (var i = 0; i <= 4; i++);
   if (cityToCheck === cleanestCities[i]) {
   matchFound = true;
   alert("It's one of the cleanest cities");
 break;
   }
   }
   if (matchFound === false) {
   alert("It's not on the list");
   }



  var numElements = cleanestCities.length;

  var numElements = cleanestCities.length;
   var matchFound = false;
   for (var i = 0; i < numElements; i++);
   if (cityToCheck === cleanestCities[i]) {
   matchFound = true;
   alert("It's one of the cleanest cities");
   break;
   }
   }
   if (matchFound === false) {
   alert("It's not on the list");
   }

   var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
   2 var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
   3 var fullNames = [];
   5 for (var i = 0; i < firstNames.length; i++) {
   6 for (var j = 0; j < lastNames.length; j++) {
   7 fullNames.push(firstNames[i] + lastNames[j]);


console.log(cities);
console.log(pets);
console.log(noPets);
console.log(cleanestCities);