class AddDescriptionToPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :description, :text
  end
end
