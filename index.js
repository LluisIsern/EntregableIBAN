function ibanValid(iban) {
    // Moure 4 primers caracters al final
    var s1 = iban.slice(0, 4);
    var s2 = iban.slice(4, );
    var s = s2 + s1;

    // Lletra a numero
    var nouIban = '';
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i).match(/[a-z]/i)) {
            nouIban += (s.charCodeAt(i) - 55);
        } else {
            nouIban += s.charAt(i);
        }
    }
    var nouIban = BigInt(nouIban);
    var resultat = nouIban % 97n;
    return (resultat == 1);
}

function cccValid(num) {
    var c1 = Number(num.slice(8, 9));
    var c2 = Number(num.slice(9, 10));

    var n = 0;
    n += Number(num.slice(0, 1))*4;
    n += Number(num.slice(1, 2))*8;
    n += Number(num.slice(2, 3))*5;
    n += Number(num.slice(3, 4))*10;
    n += Number(num.slice(4, 5))*9;
    n += Number(num.slice(5, 6))*7;
    n += Number(num.slice(6, 7))*3;
    n += Number(num.slice(7, 8))*6;
    n = 11 - n%11;
    if (n == 10) {
        n = 1;
    }
    if (n == 11) {
        n = 0;
    }
    var c1Valid = (n == c1);

    n = 0;
    n += Number(num.slice(10, 11));
    n += Number(num.slice(11, 12))*2;
    n += Number(num.slice(12, 13))*4;
    n += Number(num.slice(13, 14))*8;
    n += Number(num.slice(14, 15))*5;
    n += Number(num.slice(15, 16))*10;
    n += Number(num.slice(16, 17))*9;
    n += Number(num.slice(17, 18))*7;
    n += Number(num.slice(18, 19))*3;
    n += Number(num.slice(19, ))*6;
    n = 11 - n%11;
    if (n == 10) {
        n = 1;
    }
    if (n == 11) {
        n = 0;
    }
    var c2Valid = (n == c2);

    return (c1Valid && c2Valid);
}

module.exports = {
    ibanValid,
    cccValid,
};
