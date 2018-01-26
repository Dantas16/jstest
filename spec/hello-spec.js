//Import Hello Function
var hello = require('../js/hello');
//Begin a suite
describe('Hello', function(){
	//Specification
	it('has to print "Hello World!"', function(){
		var text = hello();
		expect(text).toEqual('Hello World!');
	})
})