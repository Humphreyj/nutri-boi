const API_KEY ="3yOnYyLHj0C2QaKJKpwBSfq9E4WIP8DJvdbv1Xce"
//DOM ELEMENTS
const foodInput = document.querySelector('.food-input'),
 foodOutput = document.querySelector('.food-output');
 //DOM ELEMENTS

 //VARIABLES
 let searchTerm = foodInput.value;
 ndbnoArr = [];
 //VARIABLES
 

function findFood() {
    axios.get(` https://api.nal.usda.gov/ndb/search/?format=json&q=eggs&max=25&offset=0&api_key=${API_KEY}`).then(function(res) {
        // let foodName = res.data.foods[0].food.desc.name;
        console.log(res.data);
        console.log(res.data.list.item)

        res.data.list.item.map(food => {
            ndbnoArr.push(`ndbno=${food.ndbno}&`);
        })

        let = testString = ndbnoArr.toString().replace(/,/g, '');

        console.log(testString);

        axios.get(`https://api.nal.usda.gov/ndb/V2/reports?${testString}type=b&format=json&api_key=${API_KEY}`).then(function(res) {
            console.log(res.data);
            console.log(res.data.foods[0].food.desc.name);

            res.data.foods.map(foods => {
                console.log(foods.food.desc.name)
            })
        })

        

        // foodOutput.innerHTML = (`<p>${foodName}</p>`);
    })
}



findFood();