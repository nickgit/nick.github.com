(function() {
	module("module1")
	test("hello test", function() {
		ok(1 == "1", "passed!")
		equal(2, 1, "2==1")
	})

	test("second test", function() {
		ok(1==="1", "not passed!")
	})
	module("module2")
	test("hello test2", function() {
		ok(1==2, "post 2")
	})

}())