@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :commentor_id, :photograph_id
    end
end
