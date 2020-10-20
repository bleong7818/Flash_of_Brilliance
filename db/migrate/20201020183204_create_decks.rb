class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.string :creator_name, null: false

      t.timestamps
    end
  end
end
