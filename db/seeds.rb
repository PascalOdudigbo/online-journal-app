puts "🌱 Seeding spices..."

# Seed your database here
user1 = User.create(username: "makk.black", email: "makkblackbookings@gmail.com", recovery_question: "what's your dream location", answer: "the elysium fields", password: "0987654321")
user2 =User.create(username: "Jermain Cole", email: "jermaincole@gmail.com", recovery_question: "what's your favourite book", answer: "think and grow rich", password: "0987654321")

Journal.create(title: "First Entry", body: "First entry for first user, yeyyy!", user_id: user1.id)
Journal.create(title: "Second Entry", body: "Second entry for first user, yeyyy!", user_id: user1.id)
Journal.create(title: "Third Entry", body: "Third entry for first user, yeyyy!", user_id: user1.id)
Journal.create(title: "First Entry", body: "First entry for first user, yeyyy!", user_id: user2.id)
Journal.create(title: "Second Entry", body: "Second entry for first user, yeyyy!", user_id: user2.id)
Journal.create(title: "Third Entry", body: "Third entry for first user, yeyyy!", user_id: user2.id)

puts "✅ Done seeding!"
