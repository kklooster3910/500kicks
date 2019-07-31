class User < ApplicationRecord 
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        # debugger
        # fail
        user = User.find_by(username: username) || User.find_by(email: username) 
        # if user.nil?
        #     user = User.find_by(email: username)
        # end
        return nil unless user
        user.is_password?(password) ? user : nil
    end
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end


    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end
