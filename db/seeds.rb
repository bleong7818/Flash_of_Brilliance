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
busterPosey = User.create({first_name: 'Buster', last_name: "Posey", email: "3WorldSeries@Giants.com", password: "MagicInside"})
kloeRinz = User.create({first_name: 'Kloe', last_name: 'Rinz', email: "Sieg@Liberl.orb", password: "Grancel"})
estelleBright = User.create({first_name: 'Estelle', last_name: 'Bright', email: "BigStick@liberl.orb", password: "Shines"})
tioPlato = User.create({first_name: 'Tio', last_name: 'Plato', email: "TioTot@Mishy.orb", password: "Mishyyy"})

deck1 = Deck.create({title: "Countries and their Capitals", creator_id: demoUser.id})
baseballTrivia = Deck.create({title: "Baseball Trivia", creator_id: busterPosey.id})
numberTrivia = Deck.create({title: "Number Trivia", creator_id: kloeRinz.id})
wholesomeFacts = Deck.create({title: "Wholesome Facts", creator_id: demoUser.id})
statesAndCapitals = Deck.create({title: "States and their Capitals", creator_id: kloeRinz.id})
basicSpanish = Deck.create({title: "Basic Spanish Words", creator_id: demoUser.id})
disneyFacts = Deck.create({title: "Disney", creator_id: estelleBright.id})
videoGamesInfo = Deck.create({title: "Video Games", creator_id: tioPlato.id})

statesAndCapitalsCards = Card.create([{front_side: "California", back_side: "Sacramento", deck_id: statesAndCapitals.id},
{front_side: "New York", back_side: "Albany", deck_id: statesAndCapitals.id}, {front_side: "Texas", back_side: "Austin",
deck_id: statesAndCapitals.id}, {front_side: "Hawaii", back_side: "Honolulu", deck_id: statesAndCapitals.id}, 
{front_side: "Kansas", back_side: "Topeka", deck_id: statesAndCapitals.id}, {front_side: "Maine", back_side: "Augusta",
deck_id: statesAndCapitals.id}, {front_side: "Ohio", back_side: "Columbus", deck_id: statesAndCapitals.id},
{front_side: "Florida", back_side: "Tallahassee", deck_id: statesAndCapitals.id}])

countryCards = Card.create([{front_side: "United States", back_side: "Washington D.C.", deck_id: deck1.id}, 
{front_side: "Mexico", back_side: "Mexico City", deck_id: deck1.id}, {front_side: "England", back_side: "London", deck_id: deck1.id},
{front_side: "China", back_side: "Beijing", deck_id: deck1.id}, {front_side: "France", back_side: "Paris", deck_id: deck1.id},
{front_side: "Iceland", back_side: "Reykjavik", deck_id: deck1.id}, {front_side: "India", back_side: "New Delhi", deck_id: deck1.id}])

numberTriviaCards = Card.create([{front_side: "What is the only number that has the same number of letters as its meaning?",
back_side: "Four", deck_id: numberTrivia.id}, {front_side: "What is the only even prime number?", back_side: "Two", deck_id: numberTrivia.id},
{front_side: "Is Pi a rational or irrational number?", back_side: "Irrational, it cannot be written as a fraction", deck_id: numberTrivia.id},
{front_side: "What is the most popular lucky number?", back_side: "Seven", deck_id: numberTrivia.id},
{front_side: "What is the most popular two-digit number?", back_side: "Thirteen", deck_id: numberTrivia.id}])

baseballTriviaCards = Card.create([{front_side: "The Game Baseball Originated From Which Country?", back_side: "England", deck_id: baseballTrivia.id},
{front_side: "What Modern Explosive Weapon Was Specifically Designed To Be The Size And Weight Of A Baseball?",
back_side: "The hand grenade, as it was thought that US soldiers would find baseball-shaped grenades easier to throw.", deck_id: baseballTrivia.id},
{front_side: "What Player Has The Longest Hitting Streak In Major League History?", back_side: "Joe DiMaggio, who achieved a 
56 game hitting streak in 1941", deck_id: baseballTrivia.id}, {front_side: "What Is The Most Often-Stolen Base?", back_side: "Second Base", deck_id: baseballTrivia.id}])

wholesomeFactsCards = Card.create([{front_side: "Seahorses do what similarly to humans?", 
back_side: "They get 'married' by forming permanent pair bonds", deck_id: wholesomeFacts.id},
{front_side: "What's a wholesome couple activity that heals wounds and fights depression?", back_side: "Cuddling", deck_id: wholesomeFacts.id},
{front_side: "What chivalrous behavior do male puppies exhibit?", back_side: "They let female puppies win fights",deck_id: wholesomeFacts.id},
{front_side: "What emotion is as neurologically strong as drugs?", back_side: "Love", deck_id: wholesomeFacts.id},
{front_side: "What a group of bunnies called?", back_side: "A Fluffle", deck_id: wholesomeFacts.id}])

basicSpanishCards = Card.create([{front_side: "La Casa", back_side: "the house", deck_id: basicSpanish.id},
{front_side: "el hombre", back_side: "the man", deck_id: basicSpanish.id}, {front_side: "la mujer", back_side: "the woman",
deck_id: basicSpanish.id}, {front_side: "el libro", back_side: "the book", deck_id: basicSpanish.id},
{front_side: "vino", back_side: "wine", deck_id: basicSpanish.id}, {front_side: "¿Qué?", back_side: "What?", deck_id: basicSpanish.id},
{front_side: "haber", back_side: "to have", deck_id: basicSpanish.id}, {front_side: "creer", back_side: "to believe", deck_id: basicSpanish.id}])

disneyFacts = Card.create([{front_side: "What year did Disneyland open?", back_side: "1955", deck_id: disneyFacts.id},
{front_side: "What is the name of Andy’s neighbor in Toy Story?", back_side: "Sid", deck_id: disneyFacts.id},
{front_side: "What does Hakuna Matata mean?", back_side: "No worries", deck_id: disneyFacts.id},
{front_side: "Genie was stuck in the lamp for how many years before Aladdin found him?", back_side: "10,000 years",
deck_id: disneyFacts.id}, {front_side: "What was the name of Walt Disney’s first cartoon character?",
back_side: "Oswald the Lucky Rabbit", deck_id: disneyFacts.id}, {front_side: "Who is Mufasa’s trusted advisor in The Lion King?",
back_side: "Zazu", deck_id: disneyFacts.id}, {front_side: "Who is the fashion designer in The Incredibles?",
back_side: "Edna Mode", deck_id: disneyFacts.id}])

videoGamesInfoCards = Card.create([{front_side: "What was the first commercially successful video game?",
back_side: "Pong", deck_id: videoGamesInfo.id}, {front_side: "What is the best selling videogame of all time?",
back_side: "Minecraft", deck_id: videoGamesInfo.id}, {front_side: "What is the most expensive video game made to date?",
back_side: "Grand Theft Auto V", deck_id: videoGamesInfo.id}, {front_side: "What video game franchise has 5 of the top 25
longest scripts in gaming?", back_side: "The Legend of Heroes, Trails series. Four of of these games each indvidually have scripts longer
than the entire Lord of the Rings Trilogy!", deck_id: videoGamesInfo.id}, 
{front_side: "What games did the famous actor Robin Williams reportedly name his children after?",
back_side: "Zelda (Legend of Zelda) and Cody (Final Flight)", deck_id: videoGamesInfo.id}])

demoUser.decks << numberTrivia
demoUser.decks << baseballTrivia
# demoUser.decks << countryCards
demoUser.decks << wholesomeFacts

# demoUser.users_decks = countryCards