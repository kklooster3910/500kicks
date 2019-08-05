json.photo do
    json.extract! @photo, :id, :title, :photographer_id
    json.photographer @photo.photographer.username
    json.image_url url_for(@photo.photo)
end

