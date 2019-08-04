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
        debugger
        @photo_upload = Photo.new(photo_params)
        if @photo_upload.save
            render json: ["success"]
        else
            render json: @photo_upload.errors.full_messages
        end
    end

    def update

    end

    def edit

    end

    def destroy

    end

    private

        def photo_params
            params.require(:photo).permit(:title, :photo)
        end
end
