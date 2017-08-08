window.onload = function () {
  // Get DOM element
  //Physics
  var submitPhysics = document.getElementById('submitPhysics');

  submitPhysics.addEventListener('click', submitClickPhysics, false);

  function submitClickPhysics() {

    var phyHead = document.getElementById('phyHead').value;
    var phyDesc = document.getElementById('phyDesc').value;


    var database = firebase.database().ref().child('Last Work');
    var PhysicsDb = database.child("Physics");

    PhysicsDb.child("Heading").set(phyHead);



  }

  //Maths
  var submitMaths = document.getElementById('submitMaths');

  submitMaths.addEventListener('click', submitClickMaths, false);

  function submitClickMaths() {
    var mathsHead = document.getElementById('mathsHead').value;
    var mathsDesc = document.getElementById('mathsDesc').value;
    var database = firebase.database().ref().child('Last Work');

    var MathsDb = database.child("Maths");

    MathsDb.child("Heading").set(mathsHead);

    MathsDb.child("Description").set(mathsDesc);

  }

  //Chemistry
  var submitChemistry = document.getElementById('submitChemistry');

  submitChemistry.addEventListener('click', submitClickChemistry, false);

  function submitClickChemistry() {

    var chemHead = document.getElementById('chemHead').value;
    var chemDesc = document.getElementById('chemDesc').value;
    var database = firebase.database().ref().child('Last Work');

    var ChemistryDb = database.child("Chemistry");

    ChemistryDb.child("Heading").set(phyHead);

    ChemistryDb.child("Description").set(phyDesc);

  }
}
