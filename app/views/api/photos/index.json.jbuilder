@photos.each do |photo|
    json.set! photo.id do
        json.extract! photo, :id, :photographer_id, :title
        json.image_url url_for(photo.photo)
    end
end
