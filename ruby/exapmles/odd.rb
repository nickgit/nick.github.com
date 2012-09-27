class Odd
  
  def initialize(&block)
  	instance_eval &block
  end
end

Odd.new do
  puts "odd initialize"
end