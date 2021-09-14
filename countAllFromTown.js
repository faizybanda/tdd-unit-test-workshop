function countAllFromTown(townLine) {
    let counter = 0;
    const town = townLine.split(',');
    for (var i=0; i<town.length; i++) {
        const townCar = town[i];
        if (townCar.startsWith('CL')) {
            counter++;
        }
        else if (townCar.startsWith('CF')) {
            counter++;
        }
    }
    return counter;
}