//javascript yay

//javascript for the filter options button

function getOptions() {
  document.getElementById("dDFilter").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dDButton')) {
    var dropdowns = document.getElementsByClassName("dDContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




//METHOD FOR FILTERING 

//SORT BY FILTER


//Sort by rating 
function sortByRating(movieA, movieB){

if(movieA.rating < movieB.rating){
   return -1;
}
if(movieA.rating > movieB.rating){
   return 1;
}
return 0;

}



function filterRating(){


let request = new XMLHttpRequest();
request.open("GET" ,"http://192.168.1.107:8080/api/films");
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.send();

request.onload = function(){
let films = JSON.parse(request.response);

 createTable();
  
 films.sort(sortByRating);


 for(let j = 0; j < films.length; j++){

 
   makeAllRows(films[j].title,
       films[j].description,
       films[j].release_year,
       films[j].length,
       films[j].rating );

     
 }

}

 }


//Sort by length

function sortByLength(movieA, movieB){

if(movieA.length < movieB.length){
   return -1;
}
if(movieA.length > movieB.length){
   return 1;
}
return 0;

}


function filterLength(){


let request = new XMLHttpRequest();
request.open("GET" ,"http://192.168.1.107:8080/api/films");
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.send();

request.onload = function(){
let films = JSON.parse(request.response);

 createTable();
  
 films.sort(sortByLength);


 for(let j = 0; j < films.length; j++){

 
   makeAllRows(films[j].title,
       films[j].description,
       films[j].release_year,
       films[j].length,
       films[j].rating );

     
 }

}

 }


//Sort by Year

function sortByYear(movieA, movieB){

if(movieA.year < movieB.year){
   return -1;
}
if(movieA.year > movieB.year){
   return 1;
}
return 0;

}



function filterYear(){


let request = new XMLHttpRequest();
request.open("GET" ,"http://192.168.1.107:8080/api/films");
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.send();

request.onload = function(){
let films = JSON.parse(request.response);

 createTable();
  
 films.sort(sortByYear);


 for(let j = 0; j < films.length; j++){

 
   makeAllRows(films[j].title,
       films[j].description,
       films[j].release_year,
       films[j].length,
       films[j].rating );

     
 }

}

 }





//creating table header

function createTable(){

let tablelocation = document.getElementById("tableText");

let table = document.createElement("table");
table.id = "movieTable";

let headingTr = document.createElement("tr");

let TdName = document.createElement("td");
TdName.innerHTML ="Film Name";

let TdDesc = document.createElement("td");
TdDesc.innerHTML ="Film Decription";

let TdRelese = document.createElement("td");
TdRelese.innerHTML ="Release year";

let TdLength = document.createElement("td");
TdLength.innerHTML ="Film Length";

let TdRating= document.createElement("td");
TdRating.innerHTML ="Film Rating";

headingTr.appendChild(TdName);
headingTr.appendChild(TdDesc);
headingTr.appendChild(TdRelese);
headingTr.appendChild(TdLength);
headingTr.appendChild(TdRating);

table.appendChild(headingTr);
tablelocation.appendChild(table);


}

function makeAllRows(n,d,ry,l,r){
	let table = document.getElementById("movieTable");

    let newRow = document.createElement("tr");

    let rName = document.createElement("td");
    rName.innerHTML = n;

   let rDesc = document.createElement("td");
    rDesc.innerHTML = d;

   let rRelease = document.createElement("td");
   rRelease.innerHTML = ry;

   let rLength = document.createElement("td");
   rLength.innerHTML = l;

   let rRating= document.createElement("td");
   rRating.innerHTML = r;
    
   //appending tds to tr 
   newRow.appendChild(rName);
   newRow.appendChild(rDesc);
   newRow.appendChild(rRelease);
   newRow.appendChild(rLength);
   newRow.appendChild(rRating);

   //append tr to table
   table.appendChild(newRow);


   
}







//method for getting all the films after printing a button 
function getAllFilms(){

let request = new XMLHttpRequest();
request.open("GET" ,"http://192.168.1.107:8080/api/films");
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.send();

request.onload = function(){

//parsing
let films = JSON.parse(request.response);

//Create table headers
createTable();

let tableLocation = document.getElementById("tableText");


//for loop to iterate through the records
for(let i = 0; i < films.length; i++){
    

makeAllRows(films[i].title,
	     films[i].description,
	     films[i].release_year,
	     films[i].length,
	     films[i].rating  );


}

}
}



function getSimilarFilms(){

let request = new XMLHttpRequest();
request.open("GET" ,"http://192.168.1.107:8080/api/films");
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.send();

request.onload = function(){

//parsing
let films = JSON.parse(request.response);

//button id link to user input
 let userText = document.getElementById("userInput").value;
 let capsText = userText.toUpperCase();

 createTable();

 for(let j = 0; j < films.length; j++){

 if ( String(films[j].title).includes(capsText)){
    
 
   makeAllRows(films[j].title,
	     films[j].description,
	     films[j].release_year,
	     films[j].length,
	     films[j].rating  );

     
 }


 }


 }

}




