describe('the test', function () {
    it('should confirm cars are "from bellville"', function () {

        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});