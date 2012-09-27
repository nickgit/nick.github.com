require 'set'
s1 = Set[3, 4, 5]
s2 = Set[1, 2, 3]

s3 = s1.union(s2)
s4 = Set[5, 2, 3, 3, 1]

s5 = s4.divide{|i| i % 2}
p s5