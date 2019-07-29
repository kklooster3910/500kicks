class Api::SessionsController < ApplicationController 
    def create
        @user = User.find.by_by_credentials(parmas[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render :create
        else
            @errors = ['Please check your username and pasword!']
        end
    end

    def destroy
        if current_user
            logout!
            render :destroy
        else
            @errors = ['You have to log in, first!']
    end

    private

    def user_params 
        params.require(:user).permit(:username, :password, :email)
    end

end