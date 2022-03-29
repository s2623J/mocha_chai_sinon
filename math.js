module.exports = Add;

function Add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

module.exports.Add_Sinon = function (numberOne, numberTwo, log) {
    let result = numberOne + numberTwo;
    log(result);
    return result;
}

module.exports.isAlive = function (ping) {
    var pingOneSuccess = ping();
    var pingTwoSuccess = ping();
    var pingThreeSuccess = ping();

    if (pingOneSuccess && pingTwoSuccess && pingThreeSuccess) {
        return true;
    }

    return false;
}

module.exports.API = {
    isAlive: function() {
        try {
            var pingOneSuccess = this.Ping();
            var pingTwoSuccess = this.Ping();
            var pingThreeSuccess = this.Ping();
        } catch (error) {
            return new Error('Ping threw new exception');
        }
    
        if (pingOneSuccess && pingTwoSuccess && pingThreeSuccess) {
            return true;
        }
    
        return false;
    },
    Ping: function() {
        return true;
    }
}