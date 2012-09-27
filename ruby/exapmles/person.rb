class Person
  
  def initialize(name, age)
  	@name, @age = name, age
  end

  def <=>(other)
  	age <=> other.age
  end

  attr_reader :name, :age
  protected :age
end

p1 = Person.new("fred", 14)
p2 = Person.new("se", 13)
puts compare = (p1 <=> p2)