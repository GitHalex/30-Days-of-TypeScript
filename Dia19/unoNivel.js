function ounterFunction() {
    var count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}
var innerFunc = ounterFunction();
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
function outerFunction() {
    var count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne(),
    };
}
var innerFuncs = outerFunction();
console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
