class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :front_side, null: false
      t.string :back_side, null: false
      t.integer :deck_id, null: false

      t.timestamps
    end
  end
end
