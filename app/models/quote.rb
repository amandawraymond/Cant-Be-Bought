class Quote
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  field :category, type: String
  field :id, type: Integer
  field :source, type: String
  field :sentence, type: String
  field :author, type: String
end
