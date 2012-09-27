str = "a123b123c123"
if /(a\d+)(b\d+)(c\d+)/ =~ str
	puts "#$1,#$2,#$3"
end

str.sub(/(a\d+)(b\d+)(c\d+)/) {puts "1st=#$1"}