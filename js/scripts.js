//Business Logic
function Shelter(){
  this.animal = [];
  this.person = [];
}

function Animal(petName, age, species){
  this.petName = petName;
  this.age = age;
  this.species = species;
  this.adopted = false;
}

function Person(firstName, lastName, location){
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = location;
}

// Shelter.prototype.addPet = function(){
//   for (var i = 0; i <arguments.length; i++){
//     this.animal.push(arguments[i]);
//   }
// }

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

Shelter.prototype.petBySpecies = function(species){
  var animals = [];
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
    var newPet = new Animal(name, age, species);
    myShelter.animal.push(newPet);
    console.log(myShelter.animal);

    var input = myShelter.animal;
    var output = addPanels(input);
    $(".pets").html(output);
    event.preventDefault();

  });
});
