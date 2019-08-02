json.photo do
    json.extract! @photo, :id, :title, :photographer_id
end

# json.extract! @photo, :id, :title, :photographer_id
