class Statistic
  include Mongoid::Document
  field :id, type: Integer
  field :category, type: String
  field :source, type: String
  field :author, type: String
  field :sentence, type: String
end
