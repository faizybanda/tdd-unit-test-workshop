var parameter = 'CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123';

function countAllPaarl(regNum) {
  var paarl = regNum.split(',');
  var counter = 0;
  for (var J = 0; J<paarl.length; J++) {
   var reg = paarl[J].trim();
    if (reg.startsWith('CJ')) {
     counter++ ;
    }
    
  }
  return counter;
};