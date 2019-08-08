class Api::CommentsController < ApplicationController

    def index
        # all comments for a photograph
        # photo = Photo.find(params[:comment][:photo_id])
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :create
        else
            render json: @comment.errors.full_messages, status: 422 
            # render json: ['Please Login to Post Comment'] 
        end
    end

    def edit

    end

    def destroy
        
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :photograph_id, :commentor_id)
    end
end