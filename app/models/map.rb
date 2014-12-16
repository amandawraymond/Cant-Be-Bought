class Map
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  field :type, type: String
  field :countries, type: String
  field :country, type: String
  field :code, type: Integer
  field :abbreviation, type: String
  field :tier, type: String
end
