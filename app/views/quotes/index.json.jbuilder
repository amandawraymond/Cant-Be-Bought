json.array!(@quotes) do |quote|
  json.extract! quote, :id, :category, :source, :sentence, :author
  json.url quote_url(quote, format: :json)
end
