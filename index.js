const API_KEY ="3yOnYyLHj0C2QaKJKpwBSfq9E4WIP8DJvdbv1Xce"
//DOM ELEMENTS
const foodInput = document.querySelector('.food-input');

function findFood() {
    axios.get(` https://api.nal.usda.gov/ndb/V2/reports?ndbno=01009&ndbno=01009&type=b&format=json&api_key=${API_KEY}`).then(function(res) {
        console.log(res.data.foods[0].food);
    })
}

function getInputValue(e) {
    console.log(foodInput.value);
}

foodInput.addEventListener('keypress', getInputValue);
findFood();