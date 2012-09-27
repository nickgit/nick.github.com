require 'yaml'

file = File.new('data.yaml')
array = YAML.load(file)
p array