describe('this test', function () {
    it('should count all from town', function () {
        assert.equal(fromStellies, 3)

        assert.equal(fromKuilsriver, 1)
    });

});

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains

