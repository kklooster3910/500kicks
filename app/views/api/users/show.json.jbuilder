json.user do
    json.extract! @user, :id, :username, :photo_ids
end

json.photos do
    @user.photos.each do |photo|
        json.set! photo.id do
            json.extract! photo, :id, :title, :description
            json.image_url url_for(photo.photo)
        end
    end
end

