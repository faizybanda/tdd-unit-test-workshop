    function countAllFromTown(regNum, town) {
        var list = regNum.split(',');
        var counter = 0;
        var fromTown = [];
        for (var i = 0; i<list.length; i++) {
         
          if (list[i].includes(town) == true) {
           counter++ 
          }
          
        }
        return counter;
      };