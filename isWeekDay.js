function isWeeekDay(weekDay) {
    return weekDay.startWith('M','T','W','F');
}
console.log(isWeeekDay('Monday'));
console.log(isWeeekDay('january'));


function weekOrWeekend(day) {
    if (day.startsWith('S')) {
     return 'weekend'; 
    } else if (day.startsWith('M, T, W, F')); {
      return 'week';
    }
  }; 