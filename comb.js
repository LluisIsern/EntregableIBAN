const funcions = require('./index.js');

const input = 'ES792100081361012345';
const numDigitsOcults = (24 - input.length);

var numCombinacions = 0;
for (i = 0; i < 10**numDigitsOcults; i++) {
    var j = ('00000000' + i).slice(-numDigitsOcults);
    if (funcions.ibanValid(input + j) && funcions.cccValid(input.slice(4) + j)) {
        console.log(input + j);
        numCombinacions++;
    }
}
console.log(numCombinacions + ' combinacions');
