var a = {name: 'Ana'};
var b = {name: 'Ana'};

describe('Object', function(){
	it('a toBe a', function(){
		expect(a).toBe(a); //compare if the object is the same
	})
	it('a equals to b', function(){
		expect(a).toEqual(b);
	})
});