// object_ex2.js

function Estimate(param) {
    this.unit = param;
    this.getEstimate = function(unitType, width, height) {
        let priceInfo = this.unit.find(val => val.type == unitType);
        return priceInfo.price * width * height;
    }
    this.addUnit = function(unit) {
    this.unit.push(unit);
    }
}

let unitInfo = [
    {type: 'wood', price: 300},
    {type: 'iron', price: 200},
    {type: 'plastic', price: 400}
]

let estmate = new Estimate(unitInfo);
let result = estmate.getEstimate('iron', 30 , 40);

estmate.addUnit({type: 'carbon', price: 900});
let result1 = estmate.getEstimate('carbon', 20 , 40);

console.log(`계산: ${result}`);
console.log(`계산: ${result1}`);