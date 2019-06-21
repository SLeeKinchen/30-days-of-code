var meal_cost;
var tip_percent;
var tax_percent;

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    meal_cost + (meal_cost * tip_percent / 100) + (meal_cost * tax_percent / 100)
};

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    var tip = meal_cost * (tip_percent / 100);
    var tax = meal_cost * (tax_percent / 100);
    var totalCost = (meal_cost + tip + tax).toFixed(0);


    solve(meal_cost, tip_percent, tax_percent);
    console.log(totalCost)
}
