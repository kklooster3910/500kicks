class Api::LikesController < ApplicationController
    def index
        @likes = Like.includes(:photo).all
        render :index
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render :create
        else 
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like     
            @like.destroy
            render :destroy
        else
            render json:['this was not a success bruh']
        end
    end

    # def update
    #     @like = Like.find_by(id: params[:id])
    #     @like.liked = !@like.liked
    #     if @like.save
    #         render :update
    #     else
    #         render json: @like.erorrs.full_messages, status: 422
    #     end
    # end

    private

    def like_params
        params.require(:like).permit(:photo_id, :photographer_id)
    end

end