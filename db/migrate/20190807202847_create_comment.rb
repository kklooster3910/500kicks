class CreateComment < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :photograph_id, null: false
      t.integer :commentor_id, null: false

      t.timestamps
    end

    add_index :comments, :photograph_id

  end
end
