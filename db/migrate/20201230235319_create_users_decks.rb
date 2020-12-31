class CreateUsersDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :users_decks do |t|
      t.integer :user_id, foreign_key: true
      t.integer :deck_id, foreign_key: true

      t.timestamps
    end
    add_index :users_decks, [:user_id, :deck_id], unique: true
  end
end
