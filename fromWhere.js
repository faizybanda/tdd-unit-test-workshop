/* function fromWhere(regNo) {
    if (regNo.startsWith('CY'))
    {return 'Bellville';}
    else if (regNo.startsWith('CJ'))
    {return 'Paarl';}
    else if (regNo.startsWith('CA'))
    {return 'Cape Town';}
    else if (regNo.startsWith('CC'))
    {return 'some other place';}
} */


function fromWhere(regCode){
switch(regCode) {
    case 'CY':
      return 'Bellville';
    case 'CJ':
      return 'Paarl';
    case 'CA':
      return 'Cape Town';
    default:
      return 'Some other place!';
  }
 };