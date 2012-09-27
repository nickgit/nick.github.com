require 'dbm'

d = DBM.new("data")
d["123"] = "toodle!"
puts d["123"]
d.close()