class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
    end

    def show
        @photo = Photo.find_by(id: params[:id])
        if @photo 
            render :show
        else  
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def create

    end

    def new

    end

    def update

    end

    def edit

    end

    def destroy

    end

    def photo_params
        params.require(:photo).permit(:title)
    end
end
