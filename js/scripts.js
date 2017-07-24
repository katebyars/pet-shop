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

  $("#addPet").submit(function(event){
    var name = $("#petName").val();
    var species = $("#petSpecies").val();
    var age = $("#petAge").val();
    var newPet = new Animal(name, age, species);
    myShelter.animal.push(newPet);
    console.log(myShelter.animal);
    $(".pets").append('<div class="col-md-4 ' + newPet.species + '">' +
                        '<div class="panel panel-default">' +
                          '<div class="panel-heading">' +
                            '<p class="style1">' +
                              newPet.petName +
                            '</p>' +
                          '</div>' +
                          '<div class="panel-body">' +
                            'The age of this pet: <br>' +
                            newPet.age+
                            '<br> This pet is: <br>' +
                            newPet.species +
                          '</div>'+
                        '</div>' +
                      '</div>');
    event.preventDefault();

  });
});
