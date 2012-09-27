def yy
  yield 5
end

yy {|x| puts x}