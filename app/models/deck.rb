class Deck < ApplicationRecord
    validates :creator_id, :title, :creator_name, presence: true
    
    belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User

    
end
