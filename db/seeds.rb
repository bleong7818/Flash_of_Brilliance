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

demoUser = User.create({first_name: 'Demo', last_name: 'User', email: "DemoUser@FlashofBrilliance.com", password: "password"})
user1 = User.create({first_name: 'Kloe', last_name: 'Rinz', email: "Sieg@Liberl.orb", password: "Grancel"})
user2 = User.create({first_name: 'Estelle', last_name: 'Bright', email: "BigStick@liberl.orb", password: "Shines"})
user3 = User.create({first_name: 'Joshua', last_name: 'Bright', email: "JYBright@liberl.orb", password: "KarinAndLoewe"})

deck1 = Deck.create({title: "Countries and Capitals", creator_id: demoUser.id})
deck2 = Deck.create({title: "The White Madrigal", creator_id: user1.id})
deck3 = Deck.create({title: "Bracer Rules", creator_id: user2.id})
deck4 = Deck.create({title: "How to be happy", creator_id: user3.id})

card1 = Card.create({front_side: "Oscar", back_side: "Julius", deck_id: deck2.id})
countryCards = Card.create([{front_side: "United States", back_side: "Washington D.C.", deck_id: deck1.id}, 
{front_side: "Mexico", back_side: "Mexico City", deck_id: deck1.id}, {front_side: "England", back_side: "London", deck_id: deck1.id},
{front_side: "China", back_side: "Beijing", deck_id: deck1.id}, {front_side: "France", back_side: "Paris", deck_id: deck1.id},
{front_side: "Iceland", back_side: "Reykjavik", deck_id: deck1.id}, {front_side: "India", back_side: "New Delhi", deck_id: deck1.id}])