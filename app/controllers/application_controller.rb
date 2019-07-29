class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
        current_user.reset_session_token!
        @current_user = nil
        session[:session_token] = nil
    end

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in
        redirect_to new_session_url unless logged_in? # do we need this line of code? comment this out to see what happens?
    end

    def require_logged_out # do I need this functionaliy, commed this out, figure out what it does, etc ... 
        redirect_to user_url(current_user) if logged_in?
    end
end
