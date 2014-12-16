json.array!(@maps) do |map|
  json.extract! map, :type, :country, :code, :abbreviation, :tier
  json.url map_url(map, format: :json)
end
