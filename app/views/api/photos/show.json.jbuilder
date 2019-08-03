json.photo do
    json.extract! @photo, :id, :title, :photographer_id
    json.image_url url_for(@photo.photo)
end

# json.extract! @photo, :id, :title, :photographer_id
