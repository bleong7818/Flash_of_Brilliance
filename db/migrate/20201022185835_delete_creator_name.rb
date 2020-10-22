class DeleteCreatorName < ActiveRecord::Migration[5.2]
  def change
    remove_column :decks, :creator_name
  end
end
