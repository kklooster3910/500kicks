class Api::UsersController < ApplicationController 
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :home #unsure on this, figure this out tonight, at the latest
        else
            @user.errors.full_messages
            render :errors
        end
    end

    def show
        @user = User.find_by(params[:id])
        render :show
    end

    # def destroy -- maybe implement this at some point in the future

    # end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)

    end
    
end