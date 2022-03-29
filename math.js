module.exports = Add;

function Add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

module.exports.Add_Sinon = function (numberOne, numberTwo, log) {
    let result = numberOne + numberTwo;
    log(result);
    return result;
}