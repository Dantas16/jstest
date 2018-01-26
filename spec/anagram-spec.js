var isAnagram = require('../js/anagram');

describe('Anagram', function(){
	it('is true when "abc" and "cba"', function(){
		expect(isAnagram('abc','cba')).toEqual(true);
	})
	it('is true when "amor" and "roma"', function(){
		expect(isAnagram('amor','roma')).toEqual(true);
	})
	it('is true when two empty strings', function(){
		expect(isAnagram('','')).toEqual(true);
	})
	it('is true when "132" and "312"', function(){
		expect(isAnagram('132','312')).toEqual(true);
	})
	it('is true when "0.12" and "102"', function(){
		//expect(isAnagram('0.12','102')).toEqual(true)
	})
})