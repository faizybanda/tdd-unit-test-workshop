describe('the fromWhere function' , function(){
    it('should return the location from' , function(){
        
        assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CC'), 'Some other place!'); 

        
    });

});