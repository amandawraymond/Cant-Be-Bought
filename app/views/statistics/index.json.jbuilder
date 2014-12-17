json.array!(@statistics) do |statistic|
  json.extract! statistic, :id, :id, :category, :source, :author, :sentence
  json.url statistic_url(statistic, format: :json)
end
