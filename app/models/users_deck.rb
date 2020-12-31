# == Schema Information
#
# Table name: users_decks
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  deck_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UsersDeck < ApplicationRecord
    validates :user_id, uniqueness: {scope: :deck_id}

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs :deck,
    foreign_key: :deck_id,
    class_name: :Deck
end
