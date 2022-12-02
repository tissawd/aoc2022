const inputValues = require('../input1_1');
let sum = 0
for (caloriesList of inputValues) {
    const totalCalories = caloriesList.reduce((accum, cals) => accum + cals);
    if (totalCalories > sum) {
        sum = totalCalories;
    }
}
console.log(sum);