@photos.each do |photo|
    json.set! photo.id do
        json.extract! photo, :id, :photographer_id, :title
    end
end