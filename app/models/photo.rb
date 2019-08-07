# == Schema Information
#
# Table name: photos
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  photographer_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  description     :text
#

class Photo < ApplicationRecord
    validates :title, presence: true

    belongs_to :photographer,
        class_name: 'User',
        foreign_key: :photographer_id,
        primary_key: :id
    has_many :likes,
        class_name: 'Like',
        foreign_key: :photo_id,
        primary_key: :id
    has_one_attached :photo
end
