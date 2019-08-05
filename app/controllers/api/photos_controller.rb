class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.includes(:photographer).all
        render :index
    end

    def show
        @photo = Photo.includes(:photographer).find_by(id: params[:id])
        if @photo 
            render :show
        else  
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def create
        # debugger
        # @photo_upload.photo.attach(:photo)
        photo = Photo.new(photo_params)
        if photo.save
            render json: ['hopefully we actually go to the users show page']
        else
            render json: photo.errors.full_messages, status: 422
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
            params.require(:photo).permit(:title, :photo, :photographer_id)
        end
end
