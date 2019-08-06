class CreateLike < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.boolean :liked, :default => false
      t.integer :photo_id, null: false
      t.integer :photographer_id, null: false
      
      t.timestamps
    end
  end
end
