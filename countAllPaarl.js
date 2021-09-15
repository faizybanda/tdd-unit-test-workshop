function countAllPaarl(string) {
    var first = string.split(",");
    var townlist = [];
    var count = 0;
    for (var i=0; i < first.length; i++) {
        if (first[i].includes('CJ') === true) {
            count++;townlist.push(first[i].trim());
        }
    }
    return count;
}

var countAllPaarl = "CJ"
console.log(count)