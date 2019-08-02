class Api::PhotosController < ApplicationController
    def index
        @photos = Photo.all
        render :index
    end

    def show
        @photo = Photo.find(params[:id])
        render :show
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
