// object_ex1.js

// 클래스 Estimate. 속성: 재료, 단가: 재료와 부피 => 총금액.
class Estimate {
    constructor(param) {
        this.unit = param;

    }
    getEstimate(unitType, width, height) { //wood 20 20 => 100 * 20 * 20
      let priceInfo = this.unit.find(function(val){//find() 반환메소드
            return val.type == unitType;
        })   
        return priceInfo.price * width * height;
    }
    addUnit(unit) {
        this.unit.push(unit);
    }
}

let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', price: 200}
]

let estmate = new Estimate(unitInfo);
let result = estmate.getEstimate('wood', 30, 50);

estmate.addUnit({type: 'ceramic', price: 400});
let result1 = estmate.getEstimate('ceramic', 10, 20);

console.log(estmate.unit);
console.log(`계산값은 ${result}`);
console.log(`계산값은 ${result1}`);