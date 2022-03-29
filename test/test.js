var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require("sinon");
var Add = require('../math');
var Add_Sinon = Add.Add_Sinon;
var isAlive = Add.isAlive;
var API = Add.API;


describe('Addition Tests', function() {
    it('should return 3 when passed values one and two', function () {
        let numberOne = 1;
        let numberTwo = 2;
        let expectedResult = 3;
        let actualResult = Add(numberOne, numberTwo);

        // actualResult.should.equal(expectedResult);
        // expect(actualResult).to.equal(expectedResult);
        assert.equal(actualResult, expectedResult);
    })

    it('should NOT return 3 when passed values one and four', function () {
        let numberOne = 1;
        let numberTwo = 4;
        let expectedResult = 3;
        let actualResult = Add(numberOne, numberTwo);
        
        // actualResult.should.not.equal(expectedResult);
        // expect(actualResult).to.not.equal(expectedResult);
        assert.notEqual(actualResult, expectedResult);
    })
})

describe('Spy Tests', function() {
    it('should log result of adding both numbers', function() {
        let numberOne = 1;
        let numberTwo = 2;
        let logSpy = sinon.spy();
        Add_Sinon(numberOne, numberTwo, logSpy);
        // logSpy.called.should.be.true; // Only tests if the function was called, or not
        assert(logSpy.calledWith(3).should.be.true); // Asserts logSpy logs the number 3
    })
})

describe('IsAlive Tests', function() {
    it('should return true when ping called', function() {
        let pinger = sinon.stub();
        pinger.returns(true);
        let websiteIsAlive = isAlive(pinger);
        websiteIsAlive.should.be.true;  // Confirms that pinger(stub object that returns 
                                        // a true value) executed successfully in the called function
    })

    it('should return false when ping does NOT return true three times', function() {
        let pinger = sinon.stub();
        pinger.onFirstCall().returns(true);
        pinger.onSecondCall().returns(false);
        pinger.onThirdCall().returns(true);

        let websiteIsAlive = isAlive(pinger);
        websiteIsAlive.should.be.false;  // Confirms that pinger(stub object that returns 
                                         // a false value) executed successfully in the called function
    })

    it('should call ping 3 times', function() {
        let mockAPI = sinon.mock(API);
        mockAPI.expects('Ping').exactly(3);

        API.isAlive();

        mockAPI.verify();
    })
})