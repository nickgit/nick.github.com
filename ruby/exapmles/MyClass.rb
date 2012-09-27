class MyClass
  
  SOME_CONST = "alpha" # A class-level constant
  @@var = "beta" # A class variable
 # @var = "gamma" # A class instance variable

  def initialize
  	@var = "delta"
  end

  def mymethod
  	puts "----------mymethod----------------"
  	puts SOME_CONST # the class constant
  	puts @@var # the class variable
  	puts @var # the instance variable
  end

  def MyClass.classmeth1
  	puts "--------------classmeth1------------"
  	puts SOME_CONST # the class constant
  	puts @@var # the class variable
  	puts @var # the class instance variable
  end
end

def MyClass.classmeth2
	puts "--------------------classmeth2----------------"
	puts MyClass::SOME_CONST # the class constant
	# puts @@var #error- out of scope
	puts @var # the class instance variable
end

myobj = MyClass.new
MyClass.classmeth1
MyClass.classmeth2
myobj.mymethod