const API_KEY ="3yOnYyLHj0C2QaKJKpwBSfq9E4WIP8DJvdbv1Xce"
//DOM ELEMENTS
const foodInput = document.querySelector('.food-input'),
 foodOutput = document.querySelector('.food-output');
 //DOM ELEMENTS

 //VARIABLES
 
 //VARIABLES

function findFood() {
    axios.get(` https://api.nal.usda.gov/ndb/V2/reports?ndbno=45212028&ndbno=45343301&type=b&format=json&api_key=${API_KEY}`).then(function(res) {
        let foodName = res.data.foods[0].food.desc.name;
        console.log(res.data.foods);

        foodOutput.innerHTML = (`<p>${foodName}</p>`);
    })
}

function getMatches(wordToMatch, foods) {
    console.log(foodInput.value);
    const regex = new RegExp(wordToMatch,'gi');
}

foodInput.addEventListener('change', getMatches);
findFood();