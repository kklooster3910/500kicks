class AddUniqueIndexToLike < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:photo_id, :photographer_id], unique: true
  end
end
