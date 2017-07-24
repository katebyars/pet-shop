//Business Logic
function Shelter(){
  this.animal = [];
  this.person = [];
}

function Animal(petName, age, species, id){
  this.petName = petName;
  this.age = age;
  this.species = species;
  this.adopted = false;
  this.idNum = id;
}

function Person(firstName, lastName, location){
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = location;
}

Shelter.prototype.addPet = function(name, age, species){
  var newID = this.animal.length;
  var newPet = new Animal(name,age,species,newID);
  this.animal.push(newPet);
}

Shelter.prototype.petByName = function(name){
  for(var i=0; i < this.animal.length; i++){
    if(this.animal[i].petName === name){
      return this.animal[i];
    }
  }
  console.log("Animal not found");
}

Shelter.prototype.allPets = function(){
  return this.animal;
}

Shelter.prototype.petBySpecies = function(species, animals){
  //var animals = [];
  for(var i=0; i < this.animal.length; i++){
    if(this.animal[i].species === species){
      animals.push(this.animal[i]);
    }
  }
  return animals;
}

Shelter.prototype.petByStatus = function(status){
  var animals = [];
  for(var i=0; i < this.animal.length; i++){
    if(this.animal[i].adopted === status){
      animals.push(this.animal[i]);
    }
  }
  return animals;
}

//UI
$(document).ready(function(){
  var myShelter = new Shelter();

  function addPanels(animalArray){
    var colCount = 3;
    var output = "";

    for(i=0; i < animalArray.length; i++){
      if(colCount === 3){
        output += '<div class="row">'
      }
      output += '<div class ="col-md-4">' +
                  '<div class="panel panel-default">' +
                    '<div class="panel-heading">' +
                      '<p class="style1">' +
                        animalArray[i].petName +
                      '</p>'+
                    '</div>'+
                    '<div class="panel-body">'+
                      '<p>Age: ' + animalArray[i].age +', species: ' + animalArray[i].species + '</p>' +
                      '<div class="checkbox">' +
                        '<label><input type="checkbox" value="" id="' + animalArray[i].idNum + '">Adopt Me!</label>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>';
      colCount--;
      if(colCount === 0){
        output += '</div>';
        colCount = 3;
      }
    }
    if(animalArray.length%3 !== 0){
      output += '</div>';
    }
    return output;
  }

  $("#addPet").submit(function(event){
    var name = $("#petName").val();
    var species = $("#petSpecies").val();
    var age = $("#petAge").val();
    myShelter.addPet(name, age, species);
    console.log(myShelter.animal);

    var input = myShelter.animal;
    var output = addPanels(input);
    $(".pets").html(output);
    event.preventDefault();
  });

  $("#searchAnimals").submit(function(event){
    var searchResults = $("#filterBy").val();
    var input = [];
    myShelter.petBySpecies(searchResults, input);
    var output = addPanels(input);
    $(".pets").html(output);
    event.preventDefault();
  });

});
