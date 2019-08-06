# == Schema Information
#
# Table name: likes
#
#  id              :bigint           not null, primary key
#  photo_id        :integer          not null
#  photographer_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Like < ApplicationRecord
    validates :photographer_id, uniqueness: { scope: :photo_id }

    belongs_to :photo, required: true,
        class_name: 'Photo',
        foreign_key: :photo_id,
        primary_key: :id
    belongs_to :photographer, required: true,
        class_name: 'User',
        foreign_key: :photographer_id,
        primary_key: :id
end
