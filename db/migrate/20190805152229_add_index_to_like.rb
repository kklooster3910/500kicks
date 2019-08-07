class AddIndexToLike < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, :photo_id
    add_index :likes, :photographer_id
  end
end
