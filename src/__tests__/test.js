import sum from '..';

test('test sum', () => {
    let a={
        A:1,
        B:2,
        C:3
    }
    let b={
        B:3,
        C:4,
        D:5
    }
    let result=sum(a,b);
    expect(a).toBe(result);
    expect(a).toEqual({
        A:1,
        B:5,
        C:7,
        D:5
    })
    
});
