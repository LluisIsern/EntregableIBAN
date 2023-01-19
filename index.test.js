const funcions = require('./index');
test('iban vàlid', () => {
    expect(funcions.ibanValid('ES7921000813610123456789')).toBe(true);
});

test('ccc vàlid', () => {
    expect(funcions.cccValid('21000813610123456789')).toBe(true);
})

