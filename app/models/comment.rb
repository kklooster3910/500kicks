# == Schema Information
#
# Table name: comments
#
#  id            :bigint           not null, primary key
#  body          :text             not null
#  photograph_id :integer          not null
#  commentor_id  :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :photo,
        class_name: 'Photo',
        foreign_key: :photograph_id,
        primary_key: :id
    belongs_to :user,
        class_name: 'User',
        foreign_key: :commentor_id,
        primary_key: :id
end
