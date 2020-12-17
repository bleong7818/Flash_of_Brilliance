class Card < ApplicationRecord
    validates :front_side, :back_side, presence: true
    validates :front_side, :back_side, uniqueness: true
end
