# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Deck.destroy_all
Card.destroy_all

user1 = User.create({first_name: 'Kloe', last_name: 'Rinz', email: "Sieg@Liberl.orb", password: "Grancel"})
user2 = User.create({first_name: 'Estelle', last_name: 'Bright', email: "BigStick@liberl.orb", password: "Shines"})
user3 = User.create({first_name: 'Joshua', last_name: 'Bright', email: "JYBright@liberl.orb", password: "KarinAndLoewe"})

deck1 = Deck.create({id: 1, title: "The White Madrigal", creator_id: user1.id})
deck2 = Deck.create({id: 2, title: "Bracer Rules", creator_id: user2.id})
deck3 = Deck.create({id: 3, title: "How to be happy", creator_id: user3.id})

card1 = Card.create({front_side: "Oscar", back_side: "Julius", deck_id: 1})