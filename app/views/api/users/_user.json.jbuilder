json.extract! @user, :id, :username, :email

@user.photos.each do |photo|
    json.photos do
        json.set! photo.id do
            json.extract! photo, :id, :title
            json.image_url url_for(photo.photo)
        end
    end
end