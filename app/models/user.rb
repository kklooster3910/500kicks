# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  image_url       :string
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord 
    validates :username, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :photos,
        class_name: 'Photo',
        primary_key: :id,
        foreign_key: :photographer_id
    has_many :comments,
        class_name: 'Comment',
        primary_key: :id,
        foreign_key: :commentor_id

    def self.find_by_credentials(username, password)

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
