class Api::SessionsController < ApplicationController 
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        # fail
        if @user
            login(@user)
            render :create
        else
            render json: ['Please check your username and password!'], status: 422
        end
    end

    def destroy
        if current_user
            logout!
            render :destroy
        else
            render json: ['You have to log in, first!'], status: 422
        end
    end

    private


    def user_params 
        params.require(:user).permit(:username, :password, :email)
    end

end 