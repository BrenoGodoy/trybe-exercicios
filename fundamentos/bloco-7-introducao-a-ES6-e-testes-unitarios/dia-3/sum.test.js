const receive = require('./sum');

describe('Requisito 1', () => {
    it('soma(4, 5) retorna 9', () => {
        expect(receive(4, 5)).toEqual(9);
    })
});

describe('Requisito 2', () => {
    it('soma(0, 0) retorna 0', () => {
        expect(receive(0, 0)).toEqual(0);
    })
});

describe('Requisito 3', () => {
    it(`soma(4, '5') retorna erro`, () => {
        expect(() => {
            receive(4,'5');
        }).toThrow();
    });
});