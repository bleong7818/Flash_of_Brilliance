# == Schema Information
#
# Table name: decks
#
#  id         :bigint           not null, primary key
#  creator_id :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Deck < ApplicationRecord
    validates :title, presence: true
    validates :title, uniqueness: true
    
    # belongs_to :user,
    # primary_key: :id,
    # foreign_key: :deck_id,
    # class_name: :User

    has_many :users_decks,
    foreign_key: :deck_id,
    class_name: :UsersDeck,
    dependent: :destroy

    has_many :users,
    through: :users_decks,
    source: :user

    # def creator_name
    #     creator(:first_name)
    # end
    
end
