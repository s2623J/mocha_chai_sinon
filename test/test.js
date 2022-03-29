var should = require('chai').should();
var expect = require('chai').expect;
var Add = require('../math');

describe('Addition Tests', function() {
    it('should return 3 when passed values one and two', function () {
        let numberOne = 1;
        let numberTwo = 2;
        let expectedResult = 3;
        let actualResult = Add(numberOne, numberTwo);

        // actualResult.should.equal(expectedResult);
        expect(actualResult).to.equal(expectedResult);
    })

    it('should NOT return 3 when passed values one and four', function () {
        let numberOne = 1;
        let numberTwo = 4;
        let expectedResult = 3;
        let actualResult = Add(numberOne, numberTwo);
        
        // actualResult.should.not.equal(expectedResult);
        expect(actualResult).to.not.equal(expectedResult);
    })
})