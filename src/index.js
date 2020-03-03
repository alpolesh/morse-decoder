const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let obj = {};
    let str = '';
    let arr = expr.match(/.{10}/g);
    for (let i = 0; i < arr.length; i++){
        obj[String(i)] = arr[i];
    }
    for (let key in obj){
        obj[key] = obj[key].replace(/10/g, ".");
        obj[key] = obj[key].replace(/11/g, "-");
        obj[key] = obj[key].replace(/0/g, "");
        if (obj[key] !== '**********'){
            str += MORSE_TABLE[obj[key]];
        }
        else {
            str += ' ';
        }
    }

    return str;
}
console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));
module.exports = {
    decode
}