describe('the Years Ago function' , function(){
    it('should show how many years ago' , function(){
        
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

    });

});