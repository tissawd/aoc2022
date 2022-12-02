const inputValues = require('../input1_1');
const totals = {};
for (caloriesList of inputValues) {
    const totalCalories = caloriesList.reduce((accum, cals) => accum + cals);
    totals[totalCalories] = ''
}
console.log(Object.keys(totals).slice(inputValues.length - 4).reduce((accum, cals) => Number(accum) + Number(cals)));