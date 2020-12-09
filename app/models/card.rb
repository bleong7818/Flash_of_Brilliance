class Card < ApplicationRecord
    validates :front_side, :back_side, presence: true
end
