import sum from '..';

describe('test sum', () => {
    it('should work with 2 objects', () => {
        let a = {
            A: 1,
            B: 2,
            C: 3
        };
        let b = {
            B: 3,
            C: 4,
            D: 5
        };
        let result = sum(a, b);
        expect(a).toBe(result);
        expect(a).toEqual({
            A: 1,
            B: 5,
            C: 7,
            D: 5
        });
    });

    it('should work like assign and many objects', () => {
        var result = sum({}, {a: 1}, {b: 2}, {a: 1, c: 3});
        expect(result).toEqual({
            a: 2, b: 2, c: 3
        });
    });


});
