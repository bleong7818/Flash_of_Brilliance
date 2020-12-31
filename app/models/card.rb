# == Schema Information
#
# Table name: cards
#
#  id         :bigint           not null, primary key
#  front_side :string           not null
#  back_side  :string           not null
#  deck_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Card < ApplicationRecord
    validates :front_side, :back_side, presence: true
    validates :front_side, :back_side, uniqueness: true
end
