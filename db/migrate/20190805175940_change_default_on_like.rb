class ChangeDefaultOnLike < ActiveRecord::Migration[5.2]
  def change
    change_column_default :likes, :liked, true
  end
end
