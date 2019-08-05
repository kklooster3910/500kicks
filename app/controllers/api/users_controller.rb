class Api::UsersController < ApplicationController 
    def create
        @user = User.new(user_params)
        # debugger
        # fail
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422 #always keep errors as arrays, consistent API
        end
    end

    def show
        @user = User.includes(:photos).find(params[:id])
        render :show
    end    

    # def destroy -- maybe implement this at some point in the future

    # end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
    
end