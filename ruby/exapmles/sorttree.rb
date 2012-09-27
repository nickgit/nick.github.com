class SortTree
  attr_accessor :left
  attr_accessor :right
  attr_accessor :data

  def initialize(x=nil)
  	@left = nil
  	@right = nil
  	@data = x
  end

  def insert(x)
  	if @data == nil
  	  @data = x
  	elsif x <= @data
  	  if @left == nil
  	  	@left = SortTree.new x
  	  else
  	  	@left.insert x
  	  end
  	else
  	  if @right == nil
  	  	@right = SortTree.new x
  	  else
  	  	@right.insert x
  	  end
  	end
  end

  def inorder()
  	@left.inorder {|y| yield y} if  @left != nil
  	yield @data
  	@right.inorder {|y| yield y} if @right != nil
  end

  def preorder()
  	yield @data
  	@left.preorder {|y| yield y} if @left != nil
  	@right.preorder {|y| yield y} if @right != nil
  end

  def postorder()
  	@left.postorder {|y| yield y} if @left != nil
  	@right.postorder {|y| yield y} if @right != nil
  	yield @data
  end

  def search(x)
  	if self.data == x
  	  return self
  	elsif x < self.data
  	  return @left ? @left.search(x) : nil
  	else
  	  return @right ? @right.search(x) : nil
  	end
  end
  		
end

items =[50,20,80,10,30,70,90,5,28,41,66,75,88,96]

tree = SortTree.new

items.each {|x| tree.insert(x)}

tree.inorder {|x| print x, " "}
print "\n"

tree.preorder {|x| print x, " "}
print "\n"

tree.postorder {|x| print x, " "}

s2 = tree.search(5)
p s2.data