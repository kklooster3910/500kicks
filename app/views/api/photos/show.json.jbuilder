json.photo do
    json.extract! @photo, :id, :title, :photographer_id, :created_at, :description, :comment_ids, :like_ids
    json.photographer @photo.photographer.username
    json.image_url url_for(@photo.photo)
end

json.comments do
    @photo.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :commentor_id, :photograph_id
        end
    end
end 

json.likes do
    @photo.likes.each do |like|
        json.set! like.id do 
            json.extract! like, :id, :photographer_id, :photo_id
        end
    end
end