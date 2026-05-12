const fields = [
  "premise",
  "character",
  "goal",
  "conflict",
  "beginning",
  "middle",
  "ending",
  "scene1",
  "scene2",
  "scene3"
];


// LOAD SAVED DATA
window.onload = function () {

  fields.forEach(function(id) {

    const savedData = localStorage.getItem(id);

    if (savedData) {
      document.getElementById(id).value = savedData;
    }

  });

};


// AUTO SAVE WHILE TYPING
fields.forEach(function(id) {

  document.getElementById(id).addEventListener("input", function() {

    localStorage.setItem(id, this.value);

  });

});


// GENERATE STORY
function generateStory() {

  const premise = document.getElementById("premise").value;

  const character = document.getElementById("character").value;

  const goal = document.getElementById("goal").value;

  const conflict = document.getElementById("conflict").value;

  const beginning = document.getElementById("beginning").value;

  const middle = document.getElementById("middle").value;

  const ending = document.getElementById("ending").value;

  const scene1 = document.getElementById("scene1").value;

  const scene2 = document.getElementById("scene2").value;

  const scene3 = document.getElementById("scene3").value;

  const output = `
    <h3>${premise}</h3>

    <p><strong>Main Character:</strong> ${character}</p>

    <p><strong>Goal:</strong> ${goal}</p>

    <p><strong>Conflict:</strong> ${conflict}</p>

    <hr>

    <h3>3 Act Structure</h3>

    <p><strong>Beginning:</strong> ${beginning}</p>

    <p><strong>Middle:</strong> ${middle}</p>

    <p><strong>Ending:</strong> ${ending}</p>

    <hr>

    <h3>Storyboard</h3>

    <p>1. ${scene1}</p>

    <p>2. ${scene2}</p>

    <p>3. ${scene3}</p>
  `;

  document.getElementById("output").innerHTML = output;
}
