

describe('the isWeekDay function' , function(){
    it('should tell if it isWeekDay"' , function(){
       
        assert.equal(weekOrWeekend('Wednesday'), 'week');
        assert.equal(weekOrWeekend('Monday'), 'week');
        assert.equal(weekOrWeekend('Friday'), 'week');
        
        assert.equal(weekOrWeekend('Sunday'), 'weekend');
        assert.equal(weekOrWeekend('Saturday'), 'weekend');

    });

});