class Deck < ApplicationRecord
    validates :title, presence: true
    validates :title, uniqueness: true
    
    # belongs_to :creator,
    # primary_key: :id,
    # foreign_key: :creator_id,
    # class_name: :User

    # def creator_name
    #     creator(:first_name)
    # end
    
end
