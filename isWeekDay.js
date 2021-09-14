function isWeeekDay(weekDay) {
    return weekDay.startWith('M','T','W','F');
}
console.log(isWeeekDay('Monday'));
console.log(isWeeekDay('january'));